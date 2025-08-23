const express = require('express');
const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');
const db = require('../utils/db');
const { requireAuth, requireRole } = require('../middleware/auth');
const { findNearbyDrivers } = require('../services/matchmaking');

const router = express.Router();

const requestSchema = Joi.object({
  pickup: Joi.object({ lat: Joi.number().required(), lng: Joi.number().required(), address: Joi.string().allow('').optional() }).required(),
  dropoff: Joi.object({ lat: Joi.number().required(), lng: Joi.number().required(), address: Joi.string().allow('').optional() }).required()
});

router.post('/request', requireAuth, requireRole('rider'), async (req, res, next) => {
  try {
    const { pickup, dropoff } = await requestSchema.validateAsync(req.body);
    const rideId = uuidv4();
    const estDistRes = await db.query('SELECT distance_km($1,$2,$3,$4) AS km', [pickup.lat, pickup.lng, dropoff.lat, dropoff.lng]);
    const distanceKmEst = Number(estDistRes.rows[0].km.toFixed(2));
    const BASE_CENTS = 2000; // 20 ETB example (adjust as needed)
    const PER_KM_CENTS = 500; // 5 ETB per km example
    const fareEstimate = Math.max(BASE_CENTS, Math.round(BASE_CENTS + distanceKmEst * PER_KM_CENTS));

    await db.query('BEGIN');
    await db.query(
      `INSERT INTO rides (id, rider_id, status, pickup_lat, pickup_lng, pickup_address,
                          dropoff_lat, dropoff_lng, dropoff_address, distance_km_est, fare_estimate_cents)
       VALUES ($1,$2,'requested',$3,$4,$5,$6,$7,$8,$9,$10)`,
      [rideId, req.user.sub, pickup.lat, pickup.lng, pickup.address || null, dropoff.lat, dropoff.lng, dropoff.address || null, distanceKmEst, fareEstimate]
    );

    // find nearby drivers and create offers
    const nearby = await findNearbyDrivers(pickup.lat, pickup.lng, 3);
    let assignedDriverId = null;
    if (nearby.length) {
      // optimistically assign the nearest driver for MVP
      assignedDriverId = nearby[0].driver_id;
      await db.query(
        `UPDATE rides SET driver_id=$1, status='driver_assigned' WHERE id=$2`,
        [assignedDriverId, rideId]
      );
      await db.query(
        `INSERT INTO ride_offers (id, ride_id, driver_id, status) VALUES ($1,$2,$3,'offered')`,
        [uuidv4(), rideId, assignedDriverId]
      );
    } else {
      await db.query(`UPDATE rides SET status='no_driver' WHERE id=$1`, [rideId]);
    }

    await db.query('COMMIT');

    res.status(201).json({
      id: rideId,
      status: assignedDriverId ? 'driver_assigned' : 'no_driver',
      driver_id: assignedDriverId,
      fare_estimate_cents: fareEstimate,
      distance_km_est: distanceKmEst
    });
  } catch (err) {
    await db.query('ROLLBACK').catch(()=>{});
    if (err.isJoi) err.status = 400;
    next(err);
  }
});

router.get('/:id', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM rides WHERE id=$1', [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: 'Ride not found' });
    const ride = rows[0];
    if (req.user.role !== 'admin' && ![ride.rider_id, ride.driver_id].includes(req.user.sub)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    res.json(ride);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/accept', requireAuth, requireRole('driver'), async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM rides WHERE id=$1', [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: 'Ride not found' });
    const ride = rows[0];
    if (ride.driver_id !== req.user.sub) return res.status(403).json({ message: 'You are not the offered driver' });
    if (ride.status !== 'driver_assigned' && ride.status !== 'requested') return res.status(400).json({ message: 'Ride not in acceptable state' });

    await db.query('BEGIN');
    await db.query(`UPDATE rides SET status='driver_arrived' WHERE id=$1`, [req.params.id]);
    await db.query(`UPDATE drivers SET status='on_trip' WHERE user_id=$1`, [req.user.sub]);
    await db.query('COMMIT');

    res.json({ ok: true });
  } catch (err) {
    await db.query('ROLLBACK').catch(()=>{});
    next(err);
  }
});

router.post('/:id/start', requireAuth, requireRole('driver'), async (req, res, next) => {
  try {
    await db.query(
      `UPDATE rides SET status='in_progress', started_at=now() WHERE id=$1 AND driver_id=$2`,
      [req.params.id, req.user.sub]
    );
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

router.post('/:id/complete', requireAuth, requireRole('driver'), async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM rides WHERE id=$1 AND driver_id=$2', [req.params.id, req.user.sub]);
    if (!rows.length) return res.status(404).json({ message: 'Ride not found' });
    const ride = rows[0];
    const distRes = await db.query('SELECT distance_km($1,$2,$3,$4) km', [ride.pickup_lat, ride.pickup_lng, ride.dropoff_lat, ride.dropoff_lng]);
    const km = Number(distRes.rows[0].km.toFixed(2));
    const BASE_CENTS = 2000;
    const PER_KM_CENTS = 500;
    const fare = Math.max(BASE_CENTS, Math.round(BASE_CENTS + km * PER_KM_CENTS));

    await db.query(
      `UPDATE rides SET status='completed', completed_at=now(), fare_actual_cents=$1 WHERE id=$2`,
      [fare, req.params.id]
    );
    await db.query(`UPDATE drivers SET status='online' WHERE user_id=$1`, [req.user.sub]);

    res.json({ ok: true, fare_actual_cents: fare, distance_km: km });
  } catch (err) {
    next(err);
  }
});

router.post('/:id/cancel', requireAuth, requireRole('rider'), async (req, res, next) => {
  try {
    await db.query(
      `UPDATE rides SET status='cancelled' WHERE id=$1 AND rider_id=$2 AND status IN ('requested','driver_assigned')`,
      [req.params.id, req.user.sub]
    );
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

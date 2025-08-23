const express = require('express');
const Joi = require('joi');
const db = require('../utils/db');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

router.post('/online', requireAuth, requireRole('driver'), async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `UPDATE drivers SET status='online', updated_at=now() WHERE user_id=$1 RETURNING user_id`,
      [req.user.sub]
    );
    if (!rows.length) return res.status(404).json({ message: 'Driver not found' });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

router.post('/offline', requireAuth, requireRole('driver'), async (req, res, next) => {
  try {
    await db.query(
      `UPDATE drivers SET status='offline', updated_at=now() WHERE user_id=$1`,
      [req.user.sub]
    );
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

const locationSchema = Joi.object({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  heading: Joi.number().optional()
});

router.post('/location', requireAuth, requireRole('driver'), async (req, res, next) => {
  try {
    const { lat, lng, heading } = await locationSchema.validateAsync(req.body);
    await db.query(
      `INSERT INTO driver_locations (driver_id, lat, lng, heading, updated_at)
       VALUES ($1,$2,$3,$4,now())
       ON CONFLICT (driver_id) DO UPDATE SET lat=EXCLUDED.lat, lng=EXCLUDED.lng, heading=EXCLUDED.heading, updated_at=now()`,
      [req.user.sub, lat, lng, heading || null]
    );
    res.json({ ok: true });
  } catch (err) {
    if (err.isJoi) err.status = 400;
    next(err);
  }
});

module.exports = router;

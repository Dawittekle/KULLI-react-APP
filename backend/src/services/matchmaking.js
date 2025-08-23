const db = require('../utils/db');

/**
 * Find nearby online drivers within 'radiusKm' of (lat, lng).
 * Performs a quick bounding box filter then precise Haversine distance.
 */
async function findNearbyDrivers(lat, lng, radiusKm = 3) {
  // bounding box (very rough but fast)
  const degLat = radiusKm / 111; // ~111km per degree latitude
  const degLng = radiusKm / (111 * Math.cos((lat * Math.PI) / 180));
  const minLat = lat - degLat;
  const maxLat = lat + degLat;
  const minLng = lng - degLng;
  const maxLng = lng + degLng;

  const { rows } = await db.query(
    `
    SELECT u.id as driver_id, dl.lat, dl.lng, d.status
    FROM driver_locations dl
    JOIN drivers d ON d.user_id = dl.driver_id
    JOIN users u ON u.id = dl.driver_id
    WHERE dl.lat BETWEEN $1 AND $2
      AND dl.lng BETWEEN $3 AND $4
      AND d.status = 'online';
    `,
    [minLat, maxLat, minLng, maxLng]
  );

  if (!rows.length) return [];

  // order by precise distance
  const withDistance = await db.query(
    `
    SELECT driver_id,
           distance_km($1, $2, lat, lng) AS dist_km
    FROM (SELECT dl.driver_id, dl.lat, dl.lng
          FROM driver_locations dl
          JOIN drivers d ON d.user_id = dl.driver_id
          WHERE dl.lat BETWEEN $3 AND $4
            AND dl.lng BETWEEN $5 AND $6
            AND d.status = 'online') q
    ORDER BY dist_km ASC
    LIMIT 20;
    `,
    [lat, lng, minLat, maxLat, minLng, maxLng]
  );

  return withDistance.rows;
}

module.exports = { findNearbyDrivers };

const express = require('express');
const db = require('../utils/db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT id, role, name, email, phone, created_at FROM users WHERE id=$1', [req.user.sub]);
    res.json(rows[0]);
  } catch (err) { next(err); }
});

module.exports = router;

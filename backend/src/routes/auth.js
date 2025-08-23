const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const db = require('../utils/db');
const { signAccessToken } = require('../utils/jwt');

const router = express.Router();

const registerSchema = Joi.object({
  role: Joi.string().valid('rider','driver').required(),
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().optional(),
  phone: Joi.string().min(7).max(20).required(),
  password: Joi.string().min(6).max(100).required()
});

router.post('/register', async (req, res, next) => {
  try {
    const data = await registerSchema.validateAsync(req.body);
    const id = uuidv4();
    const hash = await bcrypt.hash(data.password, 10);

    await db.query('BEGIN');
    const userRes = await db.query(
      `INSERT INTO users (id, role, name, email, phone, password_hash)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING id, role, name, email, phone`,
      [id, data.role, data.name, data.email || null, data.phone, hash]
    );

    if (data.role === 'driver') {
      await db.query(
        `INSERT INTO drivers (user_id, is_verified, status)
         VALUES ($1, $2, $3)`, [id, false, 'offline']
      );
    }

    await db.query('COMMIT');
    const user = userRes.rows[0];
    const token = signAccessToken(user);
    res.status(201).json({ user, token });
  } catch (err) {
    await db.query('ROLLBACK').catch(()=>{});
    if (err.isJoi) err.status = 400;
    if (err.code === '23505') { // unique violation
      err.status = 409;
      err.message = 'Email or phone already exists';
    }
    next(err);
  }
});

const loginSchema = Joi.object({
  phone: Joi.string().required(),
  password: Joi.string().required()
});

router.post('/login', async (req, res, next) => {
  try {
    const { phone, password } = await loginSchema.validateAsync(req.body);
    const { rows } = await db.query('SELECT * FROM users WHERE phone=$1', [phone]);
    if (!rows.length) return res.status(401).json({ message: 'Invalid credentials' });
    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const token = signAccessToken(user);
    res.json({
      user: { id: user.id, role: user.role, name: user.name, email: user.email, phone: user.phone },
      token
    });
  } catch (err) {
    if (err.isJoi) err.status = 400;
    next(err);
  }
});

module.exports = router;

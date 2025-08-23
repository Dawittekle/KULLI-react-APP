const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const createError = require('http-errors');

require('dotenv').config();

const app = express();

// basic security & logging
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGINS || '*').split(',').map(s => s.trim());
    if (allowed.includes('*') || !origin || allowed.includes(origin)) cb(null, true);
    else cb(new Error('Not allowed by CORS'));
  }
}));

app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 120
}));

// Routes
app.get('/health', (req, res) => res.json({ ok: true, ts: new Date().toISOString() }));
app.use('/auth', require('./routes/auth'));
app.use('/me', require('./routes/me'));
app.use('/drivers', require('./routes/drivers'));
app.use('/rides', require('./routes/rides'));

// 404
app.use((req, res, next) => next(createError(404, 'Not found')));

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Server error',
    status
  });
});

module.exports = app;

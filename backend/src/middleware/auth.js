const createError = require('http-errors');
const { verifyAccessToken } = require('../utils/jwt');

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return next(createError(401, 'Missing bearer token'));

  const payload = verifyAccessToken(token);
  if (!payload) return next(createError(401, 'Invalid token'));
  req.user = payload; // {sub, role, name}
  next();
}

function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return next(createError(401));
    if (req.user.role !== role && req.user.role !== 'admin') {
      return next(createError(403, 'Forbidden'));
    }
    next();
  };
}

module.exports = { requireAuth, requireRole };

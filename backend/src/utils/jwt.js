const jwt = require('jsonwebtoken');

const signAccessToken = (user) => {
  return jwt.sign(
    { sub: user.id, role: user.role, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = { signAccessToken, verifyAccessToken };

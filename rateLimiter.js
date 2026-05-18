const rateLimit = require('express-rate-limit');

const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10); // 15 min
const max = parseInt(process.env.RATE_LIMIT_MAX || '100', 10);

// General limiter applied to all /api/* routes
const globalRateLimiter = rateLimit({
  windowMs,
  max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Demasiadas peticiones. Inténtalo de nuevo en 15 minutos.',
  },
});

// Stricter limiter for write endpoints (leads, newsletter, contact)
const writeRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Límite de envíos alcanzado. Inténtalo más tarde.',
  },
});

module.exports = { globalRateLimiter, writeRateLimiter };

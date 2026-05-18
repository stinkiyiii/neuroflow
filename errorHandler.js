// Centralized error handler — must have 4 params so Express recognizes it
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || 'campo';
    return res.status(409).json({
      success: false,
      message: `El ${field} ya está registrado.`,
    });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ success: false, message: messages[0] });
  }

  // CORS error
  if (err.message && err.message.startsWith('CORS')) {
    return res.status(403).json({ success: false, message: err.message });
  }

  const statusCode = err.statusCode || 500;
  const message =
    process.env.NODE_ENV === 'production' && statusCode === 500
      ? 'Error interno del servidor'
      : err.message || 'Error interno del servidor';

  res.status(statusCode).json({ success: false, message });
}

module.exports = errorHandler;

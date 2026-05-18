const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: [true, 'La página es obligatoria'],
      trim: true,
      maxlength: [200, 'La URL de página no puede exceder 200 caracteres'],
    },
    userAgent: {
      type: String,
      trim: true,
      maxlength: [500, 'El user-agent no puede exceder 500 caracteres'],
    },
    // Simplified browser detection stored server-side
    browser: {
      type: String,
      trim: true,
      maxlength: [100, 'El nombre del navegador no puede exceder 100 caracteres'],
    },
    visitedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Visit', visitSchema);

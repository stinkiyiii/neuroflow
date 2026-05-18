const mongoose = require('mongoose');
const validator = require('validator');

const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: 'El correo no tiene un formato válido',
      },
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Newsletter', newsletterSchema);

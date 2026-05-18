const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
      minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
      maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
    },
    email: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      lowercase: true,
      trim: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: 'El correo no tiene un formato válido',
      },
    },
    message: {
      type: String,
      required: [true, 'El mensaje es obligatorio'],
      trim: true,
      minlength: [10, 'El mensaje debe tener al menos 10 caracteres'],
      maxlength: [2000, 'El mensaje no puede exceder 2000 caracteres'],
    },
    sentAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Contact', contactSchema);

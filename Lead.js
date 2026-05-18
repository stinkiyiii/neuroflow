const mongoose = require('mongoose');
const validator = require('validator');

const leadSchema = new mongoose.Schema(
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
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: 'El correo no tiene un formato válido',
      },
    },
    userType: {
      type: String,
      required: [true, 'El tipo de usuario es obligatorio'],
      enum: {
        values: ['estudiante', 'profesor', 'institución', 'otro'],
        message: 'Tipo de usuario inválido. Usa: estudiante, profesor, institución u otro',
      },
    },
    registeredAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Lead', leadSchema);

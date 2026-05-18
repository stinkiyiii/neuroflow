const Newsletter = require('../models/Newsletter');

async function subscribe(req, res, next) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'El correo es obligatorio.',
      });
    }

    const entry = await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message: '¡Te has suscrito al newsletter de NeuroFlow!',
      data: { id: entry._id, email: entry.email, subscribedAt: entry.subscribedAt },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { subscribe };

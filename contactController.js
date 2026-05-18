const Contact = require('../models/Contact');

async function sendMessage(req, res, next) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'name, email y message son obligatorios.',
      });
    }

    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: 'Mensaje recibido. Te responderemos pronto.',
      data: { id: contact._id, sentAt: contact.sentAt },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { sendMessage };

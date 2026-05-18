const Lead = require('../models/Lead');

async function createLead(req, res, next) {
  try {
    const { name, email, userType } = req.body;

    if (!name || !email || !userType) {
      return res.status(400).json({
        success: false,
        message: 'name, email y userType son obligatorios.',
      });
    }

    const lead = await Lead.create({ name, email, userType });

    res.status(201).json({
      success: true,
      message: '¡Gracias por registrarte! Te avisaremos cuando lancemos.',
      data: { id: lead._id, email: lead.email, registeredAt: lead.registeredAt },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { createLead };

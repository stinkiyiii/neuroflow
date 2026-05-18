const Visit = require('../models/Visit');
const { detectBrowser } = require('../utils/validators');

async function registerVisit(req, res, next) {
  try {
    const { page } = req.body;

    if (!page) {
      return res.status(400).json({
        success: false,
        message: 'El campo page es obligatorio.',
      });
    }

    const userAgent = req.headers['user-agent'] || '';
    const browser = detectBrowser(userAgent);

    const visit = await Visit.create({
      page,
      userAgent: userAgent.slice(0, 500),
      browser,
    });

    res.status(201).json({
      success: true,
      message: 'Visita registrada.',
      data: { id: visit._id, page: visit.page, browser: visit.browser, visitedAt: visit.visitedAt },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { registerVisit };

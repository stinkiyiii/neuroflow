const express = require('express');
const router = express.Router();
const { createLead } = require('../controllers/leadController');
const { writeRateLimiter } = require('../middleware/rateLimiter');

router.post('/', writeRateLimiter, createLead);

module.exports = router;

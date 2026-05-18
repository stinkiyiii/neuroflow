const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contactController');
const { writeRateLimiter } = require('../middleware/rateLimiter');

router.post('/', writeRateLimiter, sendMessage);

module.exports = router;

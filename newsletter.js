const express = require('express');
const router = express.Router();
const { subscribe } = require('../controllers/newsletterController');
const { writeRateLimiter } = require('../middleware/rateLimiter');

router.post('/', writeRateLimiter, subscribe);

module.exports = router;

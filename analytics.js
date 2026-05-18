const express = require('express');
const router = express.Router();
const { registerVisit } = require('../controllers/analyticsController');

router.post('/visit', registerVisit);

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controller/indexController');


router.get('/', controller.renderLandingPage);

module.exports = router;
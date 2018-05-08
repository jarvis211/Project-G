const express = require('express');
const router = express.Router();
const controller = require('../controller/indexController');


router
    .route('/')
    .get(controller.renderPage);

module.exports = router;
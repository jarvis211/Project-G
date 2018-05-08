const express = require('express');
const router = express.Router();
const controller = require('../controller/indexController');


router.get('/', controller.display);

module.exports = router;
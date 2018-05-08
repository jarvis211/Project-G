const express = require('express');
const router = express.Router();
const registerController = require('../../controller/userController/registerController');

router
    .route('/user/register')
    .get(registerController.renderPage)
    .post()

module.exports = router;
const express = require('express');
const router = express.Router();
const loginController = require('../../controller/userController/loginController');

router
    .route('/user/login')
    .get(loginController.renderPage)
    .post()

router
    .route('/user/logout')
    .get(loginController.userLogout)

module.exports = router;
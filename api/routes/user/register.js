const express = require('express');
const router = express.Router();
const registerController = require('../../controller/userController/registerController');

function isLoggedIn(req, res) {
    if(req.isAuthenticated())
        return true;
}

router
    .route('/user/register')
    .get(registerController.renderPage)
    .post()

module.exports = router;
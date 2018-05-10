const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

let operations = {
    clientAuthentication: function () {
        passport.use('local-client-login', new localStrategy ({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        }, function (req, username, password, done) {

        }))
    }
}


module.exports = operations;
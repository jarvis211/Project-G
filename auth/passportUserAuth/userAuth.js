const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
})

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        
        done(null, user);
    })
})

let operations = {
    userAuthenticate: function () {
        passport.use('local-user-signup', new localStrategy ({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        }, function (req, username, password, done) {

        }))

        passport.use('local-user-login', new localStrategy ({
            usernameField: username,
            passwordField: password,
            passReqToCallback: true
        }, function (req, username, password, done) {

        }))
    }
}

module.exports = operations;
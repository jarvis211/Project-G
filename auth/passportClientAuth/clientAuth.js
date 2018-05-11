const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.serializeUser(function (client, done) {
    done(null, client.id);
})

passport.deserializeUser(function (id, done) {
    Client.findById(id, function (err, client) {

        done(null, client);
    })
})

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
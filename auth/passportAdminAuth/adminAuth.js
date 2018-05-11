const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.serializeUser(function (admin, done) {
    done(null, admin.id);
})

passport.deserializeUser(function (id, done) {
    Admin.findById(id, function (err, admin) {
        
        done(null, admin);
    })
})

let operations = {
    adminAuthentication: function () {
        passport.use('local-admin-login', new localStrategy ({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        }, function (req, username, password, done) {

        }))
    }
}


module.exports = operations;
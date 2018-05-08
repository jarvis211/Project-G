
function isLoggedIn(req, res) {
    return req.isAuthenticated() || false;
}

let operations = {
    renderPage: function (req, res) {
        res.render('', {});
    }
}

module.exports = operations;
let operations = {
    renderPage: function(req, res) {
        res.render('index', { title: 'Project G' });
    }
}

module.exports = operations;
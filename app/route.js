'use strict'

const controller = require('./controller/index');

module.exports = app => {
    app
        .get('/', controller.index)
        .get('/resume', (req, res) => {
            res.redirect('/resume/developer');
        })
        .get('/resume/developer', controller.developerResume)
        .get('/resume/designer', controller.designerResume)
        .all('*', controller.error404);
}

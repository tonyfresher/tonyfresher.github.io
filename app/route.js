'use strict'

const controller = require('./controller/index');

module.exports = app => {
    app
        .get('/', controller.index)
        .get('/resume', controller.resume)
        .all('*', controller.error404);
}

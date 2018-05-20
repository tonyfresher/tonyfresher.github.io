'use strict';

require('dotenv').config({ path: `${__dirname}/.env` });

const path = require('path');
const express = require('express');
const hbs = require('hbs');

const controller = require('./controller/index');
const registerHelpers = require('./register-helpers');

const staticDirectory = path.join(__dirname, 'public');
const viewsDirectory = path.join(__dirname, 'views');

const app = express();

app
    .use(express.static(staticDirectory))

    .set('view engine', 'hbs')
    .set('views', viewsDirectory)

    .get('/', controller.index)
    .get('/resume', controller.resume)
    .all('*', controller.error404);

registerHelpers(hbs);

app.listen(process.env.PORT);

module.exports = app;

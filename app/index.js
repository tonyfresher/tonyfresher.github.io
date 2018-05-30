'use strict';

require('dotenv').config({ path: `${__dirname}/.env` });

const path = require('path');
const express = require('express');
const hbs = require('hbs');

const route = require('./route');
const registerHelpers = require('./register-helpers');

const staticDirectory = path.join(__dirname, 'public');
const viewsDirectory = path.join(__dirname, 'views');

const app = express();

app
    .use('/', express.static(staticDirectory))
    .use('/resume', express.static(staticDirectory))

    .set('view engine', 'hbs')
    .set('views', viewsDirectory);

registerHelpers(hbs);
route(app);

app.listen(process.env.PORT);

module.exports = app;

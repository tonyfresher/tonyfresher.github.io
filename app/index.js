'use strict';

require('dotenv').config({ path: `${__dirname}/.env` });

const path = require('path');
const express = require('express');

const route = require('./route');

const staticDirectory = path.join(__dirname, 'public');
const viewsDirectory = path.join(__dirname, 'views');

const app = express();

app
    .use('/', express.static(staticDirectory))

    .set('view engine', 'pug')
    .set('views', viewsDirectory);

route(app);

app.listen(process.env.PORT);

module.exports = app;

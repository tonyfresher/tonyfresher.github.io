'use strict';

const resumeData = require('../data/resume');

exports.index = (req, res) => {
    res.render('index');
};

exports.resume = (req, res) => {
    res.render('resume', resumeData);
};

exports.error404 = (req, res) => {
    res.sendStatus(404);
};

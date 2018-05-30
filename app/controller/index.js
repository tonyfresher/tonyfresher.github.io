'use strict';

const developerResumeData = require('../data/resume/developer');
const designerResumeData = {};

exports.index = (req, res) => {
    res.render('index');
};

exports.developerResume = (req, res) => {
    res.render('resume/developer', developerResumeData);
};

exports.designerResume = (req, res) => {
    res.render('resume/designer', developerResumeData);
};

exports.error404 = (req, res) => {
    res.sendStatus(404);
};

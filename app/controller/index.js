'use strict';

const developerResumeData = require('../data/resume/developer');
const designerResumeData = require('../data/resume/designer');

exports.index = (req, res) => {
    res.render('index');
};

exports.developerResume = (req, res) => {
    res.render('resume/developer', developerResumeData);
};

exports.designerResume = (req, res) => {
    res.render('resume/designer', designerResumeData);
};

exports.strongTextCheatsheet = (req, res) => {
    res.render('cheatsheets/strong-text');
};

exports.error404 = (req, res) => {
    res.status(404).render('404');
};

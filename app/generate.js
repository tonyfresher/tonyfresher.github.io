'use strict';

const path = require('path');
const generator = require('handlebars-generator');

const resumeData = require('./data/resume');

const srcDirectory = path.join(__dirname, 'views');
const distDirectory = path.join(__dirname, 'dist');

generator.registerSourceDirectory(srcDirectory, { extension: 'hbs' });

generator.registerPage('index', 'index');
generator.registerPage('resume', 'resume', resumeData);

generator.generatePages(distDirectory, { extension: 'html' }, error => {
    if (error) console.error(err.message);
});

'use strict';

const path = require('path');
const handlebars = require('handlebars');
const generator = require('handlebars-generator');

const registerHelpers = require('./register-helpers');
const developerResumeData = require('./data/resume/developer');

registerHelpers(handlebars)

const srcDirectory = path.join(__dirname, 'views');

const splitted = __dirname.split(path.sep)
splitted.pop()
const distDirectory = splitted.join(path.sep);

generator.registerSourceDirectory(srcDirectory, { extension: 'hbs' });

generator.registerPage('index', 'index', { staticBasePath: './app/public/'});
generator.registerPage('resume/developer', 'resume/developer',
    Object.assign({ staticBasePath: './app/public/'}, developerResumeData));

generator.generatePages(distDirectory, { extension: 'html' },
                        error => error && console.error(error));

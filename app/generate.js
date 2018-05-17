'use strict';

const path = require('path');
const generator = require('handlebars-generator');

const resumeData = require('./data/resume');

const srcDirectory = path.join(__dirname, 'views');

const splitted = __dirname.split(path.sep)
splitted.pop()
const distDirectory = splitted.join(path.sep);

generator.registerSourceDirectory(srcDirectory, { extension: 'hbs' });

generator.registerPage('index', 'index', { staticBasePath: './app/public/'});
generator.registerPage('resume', 'resume',
    Object.assign({ staticBasePath: './app/public/'}, resumeData));

generator.generatePages(distDirectory, { extension: 'html' }, error => {
    if (error) console.error(err.message);
});

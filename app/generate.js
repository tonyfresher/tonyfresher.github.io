'use strict';

const fs = require('fs');
const path = require('path');
const pug = require('pug');

const developerResumeData = require('./data/resume/developer');
const designerResumeData = require('./data/resume/designer');

const srcDir = path.join(__dirname, 'views');

const splitted = __dirname.split(path.sep)
splitted.pop()
const distDir = splitted.join(path.sep);

function generate(name, options = {}) {
    let page = pug.renderFile(path.join(srcDir, `${name}.pug`), 
        Object.assign({ publicDir: '/app/public', pretty: true }, options.locals));

    fs.writeFileSync(path.join(distDir, `${options.path || name}.html`), page);
}

generate('index');
generate('404');
generate('resume/developer', { locals: developerResumeData });
generate('resume/designer', { locals: designerResumeData });
generate('cheatsheets/strong-text');
generate('notepad/notepad', { path: 'notepad' });
generate('cars-infographic/cars-infographic', { path: 'cars-infographic' });

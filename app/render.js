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

function render(name, options = {}) {
    let page = pug.renderFile(path.join(srcDir, `${name}.pug`), 
        Object.assign({ publicDir: '/app/public', pretty: true }, options.locals));

    fs.writeFileSync(path.join(distDir, `${options.path || name}.html`), page);
}

render('index');
render('404');
render('resume/developer', { locals: developerResumeData });
render('resume/designer', { locals: designerResumeData });
render('cheatsheets/strong-text');
render('cheatsheets/make-time');
render('notepad/notepad', { path: 'notepad' });

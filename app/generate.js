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

function generate(name, locals) {
    let page = pug.renderFile(path.join(srcDir, `${name}.pug`), 
        Object.assign({ publicDir: '/app/public', pretty: true }, locals));

    fs.writeFileSync(path.join(distDir, `${name}.html`), page);
}

generate('index');
generate('404');
generate('resume/developer', developerResumeData);
generate('resume/designer', designerResumeData);
generate('cheatsheets/strong-text');
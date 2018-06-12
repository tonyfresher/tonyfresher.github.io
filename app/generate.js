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

generate('index');
generate('resume/developer', developerResumeData);
generate('resume/designer', designerResumeData);
generate('cheatsheets/strong-text');

function generate(name, locals) {
    let stepsBackCount = name.split('/').length - 1;
    let publicDir = stepsBackCount === 0
        ? './app/public'
        : `${'../'.repeat(stepsBackCount)}app/public`;

    let page = pug.renderFile(path.join(srcDir, `${name}.pug`), 
        Object.assign({ publicDir, pretty: true }, locals));

    fs.writeFileSync(path.join(distDir, `${name}.html`), page);
}
'use strict';

let DOM = {
    textarea: document.querySelector('.textarea'),
    info: {
        words: document.querySelector('.info__words')
    }
};

function initTextarea() {
    if (localStorage.ntpdText) {
        DOM.textarea.innerHTML = localStorage.ntpdText;
    } else {
        DOM.textarea.focus();
    }
}

function updateInfo() {
    DOM.info.words.textContent = readingTime(DOM.textarea.value).text;
}

function main() {
    initTextarea();

    updateInfo();
    DOM.textarea.addEventListener('input', updateInfo);
}

document.addEventListener('DOMContentLoaded', main);
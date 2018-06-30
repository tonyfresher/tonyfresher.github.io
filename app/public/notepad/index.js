'use strict';

const KEYS = {
    text: 't.ext_text',
    nightThemeOn: 't.ext_night-theme-on'
}

const DOM = {
    nightThemeOn: document.querySelector('#night-theme-on'),
    textArea: document.querySelector('.text-area'),
    statusBar: {
        nightThemeSwitch: document.querySelector('.status-bar__nignt-theme-switch'),
        glvrdScore: document.querySelector('.status-bar__glvrd-score'),
        readingTime: document.querySelector('.status-bar__reading-time')
    }
};

// Text Area

function getText() {
    return DOM.textArea.value;
}

function initTextArea() {
    if (localStorage.ntpdText) {
        DOM.textArea.innerHTML = getOption(KEYS.text) || '';
    } else {
        DOM.textArea.focus();
    }

    DOM.textArea.addEventListener('input', () => {
        saveOption(KEYS.text, getText());
    });
}

// Text Info

function initStatusBar() {
    initNightThemeSwitch();

    updateReadingTime();
    DOM.textArea.addEventListener('input', updateReadingTime);

    window.glvrd.getStatus(result => {
        if (result.status !== 'ok') {
            console.error(result.message);

            return;
        }

        updateGlvrdScore();
        DOM.textArea.addEventListener('input', updateGlvrdScore);
    });
}

function initNightThemeSwitch() {
    const now = new Date();

    DOM.nightThemeOn.checked = now.getHours() <= 6
        || getOption(KEYS.nightThemeOn) === 'true';
    
    syncNightThemeSwitch();
    DOM.nightThemeOn.addEventListener('change', syncNightThemeSwitch);
}

function syncNightThemeSwitch() {
    DOM.statusBar.nightThemeSwitch.innerHTML = DOM.nightThemeOn.checked
            ? 'Выключить ночную тему'
            : 'Включить ночную тему';

    saveOption(KEYS.nightThemeOn, DOM.nightThemeOn.checked);
}

function updateGlvrdScore() {
    glvrd.proofread(getText(), result => {
        if (result.status !== 'ok') {
            console.error(result.message);

            return;
        }

        DOM.statusBar.glvrdScore.innerHTML = `<b>${result.score}</b> баллов по шкале Главреда`;
    });
}

function updateReadingTime() {
    const info = readingTime(getText());
    DOM.statusBar.readingTime.innerHTML = `${info.words} слов, ≈ <b>${info.displayed} мин</b>`;
}

// FS

function saveOption(key, value) {
    localStorage[key] = value;
}

function getOption(key) {
    return localStorage[key];
}

// Main

function main() {
    initTextArea();
    initStatusBar();
}

document.addEventListener('DOMContentLoaded', main);
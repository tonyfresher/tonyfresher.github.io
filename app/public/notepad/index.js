'use strict';

let info = {
    readingTime: document.querySelector('.info__reading-time')
};

function updateInfo() {
    info.readingTime.textContent = readingTime(textarea.value).text;
    console.log(readingTime(textarea.value));
}

updateInfo();

textarea.addEventListener('input', updateInfo);
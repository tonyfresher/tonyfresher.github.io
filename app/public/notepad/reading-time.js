'use strict'

function readingTime(text, options = {}) {
    const words = text.split(options.wordBound || /\s/).length - 1;

    const minutes = words / (options.wordsPerMinute || 200);
    const time = minutes * 60 * 1000;
    const displayed = Math.ceil(minutes.toFixed(2));

    return {
        displayed,
        minutes,
        time,
        words
    };
}
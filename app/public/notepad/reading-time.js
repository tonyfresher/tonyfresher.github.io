'use strict'

function readingTime(text, options = {}) {
    const wordsCount = text.split(options.wordBound || /\s/).length;

    const minutes = wordsCount / (options.wordsPerMinute || 200);
    const time = minutes * 60 * 1000;
    const displayed = Math.ceil(minutes.toFixed(2));

    return {
        text: displayed + ' min read',
        minutes: minutes,
        time: time,
        words: words
    };
}
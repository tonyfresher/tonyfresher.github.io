'use strict';

module.exports = handlebars => {
    handlebars.registerHelper('multipleElements', array => {
        return array.length > 1;
    });
    handlebars.registerHelper('formatPhone', phone => {
        return `8 (${phone.substring(2, 5)}) ` +
            `${phone.substring(5, 8)} ${phone.substring(8, 10)} ${phone.substring(10)}`;
    });
};
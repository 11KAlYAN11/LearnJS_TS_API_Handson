"use strict";
// String Manipulation Utilities
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWords = exports.capitalizeFirstLetter = exports.reverseString = void 0;
function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Argument must be a string.');
    }
    return str.split('').reverse().join('');
}
exports.reverseString = reverseString;
function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Argument must be a string.');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
function countWords(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Argument must be a string.');
    }
    return str.trim().split(/\s+/).length;
}
exports.countWords = countWords;

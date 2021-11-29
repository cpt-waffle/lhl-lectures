const assert = require('chai').assert;
const palidrome = require('./palindrome')

// console.log(assert);
console.log("Test for palindrome:)");

assert.equal(palidrome('abba'), false);

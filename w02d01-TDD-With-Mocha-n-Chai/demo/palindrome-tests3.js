const cowsay = require('cowsay');
const assert = require('chai').assert;
const palindrome = require('./palindrome');
// console.log(cowsay);

console.log(cowsay.say({text: "Lets Explore Chai.js"}));

assert.isTrue(palindrome('hello'));
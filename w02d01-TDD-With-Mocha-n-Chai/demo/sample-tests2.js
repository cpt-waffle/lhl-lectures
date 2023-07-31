const palindrome = require('./palindrome');
const chai = require('chai');

const assert = chai.assert;
// console.log(assert);

// console.assert(true, "mistakes were made :(");


assert.isTrue(palindrome('racecarz'));

// racecar

// true or false --------------------
console.assert(palindrome('racecar'), "FAILED: is should PASS racecar!");
console.assert(palindrome('kayak'), "FAILED: is should PASS kayak!");
console.assert(palindrome('abba'), "FAILED: is should PASS abba!");
console.assert(palindrome('level'), "FAILED: is should PASS level!");
console.assert(palindrome('madam'), "FAILED: is should PASS madam!");

console.assert(palindrome('taco cat'), "FAILED: is should PASS 'taco cat'!");
console.assert(palindrome('nurses run'), "FAILED: is should PASS 'nurses run'!");
console.assert(palindrome('a man a plan a canal panama'), "FAILED: is should PASS 'a man a plan a canal panama'!");


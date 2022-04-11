const palindrome = require('./palindrome');
const assert = require('chai').assert;
// console.log(assert);

// abba
assert.isTrue(palindrome('abba'), ' abba is a palimdrone ');
// aba
console.assert(palindrome('aba') === true, ' aba is palindrome');
// --- we should not count upper/lowercase, therefore this one is a palindrome
// AbBa
console.assert(palindrome('AbBa') === true, ' AbBa is palindrome');
// madam
console.assert(palindrome('madam') === true, ' madam is palindrome');
// racecar
console.assert(palindrome('racecar') === true, ' racecar is palindrome');


// --- spaces should not be counted towards palindrome
// nurses run
console.assert(palindrome('nurses run') === true, ' "nurses run" is palindrome');
// never odd or even
console.assert(palindrome('never odd or even') === true, ' "never odd or even" is palindrome');
// a man a plan a canal panama
console.assert(palindrome('a man a plan a canal panama') === true, ' "a man a plan a canal panama" is palindrome');

// --- not palindrome
// box
console.assert(palindrome('box') === false, ' "box" is NOT palindrome');
// apple
// 1234
console.assert(palindrome(1221) === false, ' "1221" is NOT palindrome');

// [1,1,1,1]
// {a:1, b:2, a:1}

console.log("Palindrome Tests Finished!");
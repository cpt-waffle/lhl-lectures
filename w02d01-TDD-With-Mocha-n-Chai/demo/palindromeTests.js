const assert = require('chai').assert
const palindrome = require('./palindrome');


// kayak
console.log(" Expected Tests!")

assert.isTrue(palindrome('kayak'), 'kayak IS a palindrome');
console.assert(palindrome('racecar'), 'racecar IS a palindrome');
// madam
console.assert(palindrome('madam'), 'madam IS a palindrome');
// civic
console.assert(palindrome('civic'), 'civic IS a palindrome');
// level
console.assert(palindrome('level'), 'level IS a palindrome');


// // edge cases
// my gym
console.log("Edge Case Tests!")
console.assert(palindrome('"my gym"'), '"my gym" IS a palindrome');
// a man a plan a canal panama
console.assert(palindrome('"a man a plan a canal panama"'), '"a man a plan a canal panama" IS a palindrome');

const palindrome = require('./palindrome');
const assert = require('chai').assert;



// ABBA
assert.strictEqual(palindrome('ABBA'), true, 'ABBA is a palindrome' );
assert.isTrue(palindrome('racecars'), 'racecar is a palindrome' );



// console.assert(palindrome('ABBA'), '"WRONG: returned ABBA is not palindrome, but actually it is!"')
// // racecar
// console.assert(palindrome('racecar'), "WRONG: returned racecar is not palindrome, but actually it is!")

// // kayak
// console.assert(palindrome('kayak'), "WRONG: returned kayak is not palindrome, but actually it is!")
// // civic
// console.assert(palindrome('civic'), "WRONG: returned civic is not palindrome, but actually it is!")
// // level
// console.assert(palindrome('level'), "WRONG: returned level is not palindrome, but actually it is!")

// console.log("----------- EDGE CASES --------------------")

// // a man a plan a canal panama
// console.assert(palindrome('a man a plan a canal panama'), "WRONG: returned a man a plan a canal panama is not palindrome, but actually it is!")

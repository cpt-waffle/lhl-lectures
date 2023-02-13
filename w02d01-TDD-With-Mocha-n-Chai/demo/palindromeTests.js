const palindrome = require('./palindrome');
const assert = require('chai').assert;

// console.log(assert);

////////////// Tests //////////////////////

console.log("-----------   Regular Tests ----------------------");
assert.isBoolean(palindrome('test'), 'returns back a boolean');
// level
assert.isTrue(palindrome('level'), "FAIL: level is a PALINDROME and should return TRUE");
// kayak
assert.isTrue(palindrome('kayak'), 'FAIL: kayak is a PALINDROME and should return TRUE');
// racecar
assert.isTrue(palindrome('racecar'), "FAIL: racecar is a PALINDROME and should return TRUE");

// noon
assert.isTrue(palindrome('noon'), "FAIL: noon is a PALINDROME and should return TRUE");


/////////////// EDGE CASE ////////////////
console.log("------------- Edge Cases Tests ----------------");
// my gym
assert.isTrue(palindrome('my gym'), "FAIL: 'my gym' is a PALINDROME and should return TRUE");

// a man a plan a canal panama
assert.isTrue(palindrome('a man a plan a canal panama'), "FAIL: 'a man a plan a canal panama' is a PALINDROME and should return TRUE");

const palindrome = require('./palindrome');
const assert = require('chai').assert;

// console.log(assert);

///////// TESTS

// console.assert(palindrome('abba') === true, 'abba should return true');
// assert.isTrue(palindrome('abbc'));
// console.assert(palindrome('racecar') === true, 'racecar should return true');
// console.assert(palindrome('hello') === false, 'hello should return false');
// console.assert(palindrome('hi') === false);
// console.assert(palindrome('my gym') === true); // spaces should not matter
// console.assert(palindrome('  my gym ') === true); // spaces should not matter

// // EDGE CASES
// console.assert(palindrome('a') === true);
// console.assert(palindrome('') === false);
// console.assert(palindrome({a: 'a'}) === false);
// console.assert(palindrome([1,2,3,2,1]) === false, 'array should return false');

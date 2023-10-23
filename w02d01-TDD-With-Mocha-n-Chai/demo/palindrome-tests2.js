const palindrome = require('./palindrome');

console.log("----- Tests -----");
// if value is true or false
console.assert( palindrome('abba'), "FAILED: abba should return TRUE, because it's a palindrome");
console.assert( palindrome('hello') === false, "FAILED: hello should return FALSE");
console.assert( palindrome('kayak'), "FAILED: kayak should return TRUE, because it's a palindrome");
console.assert( palindrome('deified'), "FAILED: deified should return TRUE, because it's a palindrome");
console.assert( palindrome('mom'), "FAILED: mom should return TRUE, because it's a palindrome");

console.log('------ Edge Cases Tests ----');

console.assert( palindrome('nurses run'), "FAILED: nurses run should return TRUE, because it's a palindrome");
console.assert( palindrome('a man a plan a canal panama'), "FAILED: a man a plan a canal panama should return TRUE, because it's a palindrome");

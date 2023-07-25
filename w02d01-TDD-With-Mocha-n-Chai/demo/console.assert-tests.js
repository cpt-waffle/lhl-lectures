const palindrome = require('./palindrome');

//                   true/false
console.assert(palindrome('racecar'), "FAIL: racecar SHOULD RETURN TRUE");
console.assert(palindrome('kayak'), "FAIL: kayak SHOULD RETURN TRUE");
console.assert(palindrome('level'), "FAIL: level SHOULD RETURN TRUE");
console.assert(palindrome('rotator'), "FAIL: rotator SHOULD RETURN TRUE");
console.assert(palindrome('bob'), "FAIL: bob SHOULD RETURN TRUE");

console.assert(palindrome('taco cat'), "FAIL: 'taco cat' SHOULD RETURN TRUE");
console.assert(palindrome('a man a plan a canal panama'), "FAIL: 'a man a plan a canal panama' SHOULD RETURN TRUE");


// racecar
// kayak
// level
// bob
// rotator
// taco cat
// a man a plan a canal panama

// a function that retuns an object = {a:1, b:2, c:3}
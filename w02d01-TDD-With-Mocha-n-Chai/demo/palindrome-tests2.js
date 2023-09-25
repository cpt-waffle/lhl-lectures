const palindrome = require('./palindrome');

// hello

console.assert(palindrome('hello') === false, "FAIL:  'hello' should FAIL :(");
console.assert(palindrome('racecar') === true,  "FAIL:  'racecar' should pass :(" );
console.assert(palindrome('level') === true,  "FAIL:  'level' should pass :(" );
console.assert(palindrome('anna') === true,  "FAIL:  'anna' should pass :(" );
console.assert(palindrome('madam') === true,  "FAIL:  'madam' should pass :(" );
console.assert(palindrome('a man a plan a canal panama') === true,  "FAIL:  'a man a plan a canal panama' should pass :(" );
console.assert(palindrome('nurses run') === true,  "FAIL:  'nurses run' should pass :(" );

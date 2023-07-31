const palindrome = require('./palindrome');

console.log("--- Tests ---");
// racecar
if (palindrome('racecar') === true) {
  console.log("PASSED: racecar is a palindrome!")
} else {
  console.log("FAILED: is should PASS racecar!")
}
// kayak
if (palindrome('kayak') === true) {
  console.log("PASSED: kayak is a palindrome!")
} else {
  console.log("FAILED: is should PASS kayak!")
}
// abba
if (palindrome('abba') === true) {
  console.log("PASSED: abba is a palindrome!")
} else {
  console.log("FAILED: is should PASS abba!")
}
// level
if (palindrome('level') === true) {
  console.log("PASSED: level is a palindrome!")
} else {
  console.log("FAILED: is should PASS level!")
}
// madam
if (palindrome('madam') === true) {
  console.log("PASSED: madam is a palindrome!")
} else {
  console.log("FAILED: is should PASS madam!")
}


console.log('--- Edge Cases ---');
// edge cases

// taco cat
if (palindrome('taco cat') === true) {
  console.log("PASSED: 'taco cat' is a palindrome!")
} else {
  console.log("FAILED: is should PASS 'taco cat'!")
}

// nurses run
if (palindrome('nurses run') === true) {
  console.log("PASSED: 'nurses run' is a palindrome!")
} else {
  console.log("FAILED: is should PASS 'nurses run'!")
}

// a man a plan a canal panama
if (palindrome('a man a plan a canal panama') === true) {
  console.log("PASSED: 'a man a plan a canal panama' is a palindrome!")
} else {
  console.log("FAILED: is should PASS 'a man a plan a canal panama'!")
}

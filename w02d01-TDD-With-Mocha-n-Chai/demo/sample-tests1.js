const palindrome = require('./palindrome');

console.log("--- Tests ---");

if (palindrome('racecar') === true) {
  console.log("Passed: racecar is a palindrome");
} else {
  console.log("FAIL: racecar SHOULD RETURN TRUE");
}
if (palindrome('kayak') === true) {
  console.log("Passed: kayak is a palindrome");
} else {
  console.log("FAIL: kayak SHOULD RETURN TRUE");
}
if (palindrome('level') === true) {
  console.log("Passed: level is a palindrome");
} else {
  console.log("FAIL: level SHOULD RETURN TRUE");
}
if (palindrome('rotator') === true) {
  console.log("Passed: rotator is a palindrome");
} else {
  console.log("FAIL: rotator SHOULD RETURN TRUE");
}
if (palindrome('bob') === true) {
  console.log("Passed: bob is a palindrome");
} else {
  console.log("FAIL: bob SHOULD RETURN TRUE");
}

console.log("--- Edge Cases ---");
if (palindrome('taco cat') === true) {
  console.log("Passed: 'taco cat' is a palindrome");
} else {
  console.log("FAIL: 'taco cat' SHOULD RETURN TRUE");
}
if (palindrome('a man a plan a canal panama') === true) {
  console.log("Passed: 'a man a plan a canal panama' is a palindrome");
} else {
  console.log("FAIL: 'a man a plan a canal panama' SHOULD RETURN TRUE");
}

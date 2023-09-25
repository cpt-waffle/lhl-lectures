const palindrome = require('./palindrome');

console.log("-- Tests --")

// hello
if (palindrome('hello') === false) {
  console.log("PASSED: 'hello' is NOT a palindrome!!");
} else {
  console.log("FAIL:  'hello' should FAIL :(");
}
// racecar
if (palindrome('racecar') === true) {
  console.log("PASSED: 'racecar' is a palindrome!!");
} else {
  console.log("FAIL:  'racecar' should pass :(");
}
// level
if (palindrome('level') === true) {
  console.log("PASSED: 'level' is a palindrome!!");
} else {
  console.log("FAIL:  'level' should pass :(");
}
// anna
if (palindrome('anna') === true) {
  console.log("PASSED: 'anna' is a palindrome!!");
} else {
  console.log("FAIL:  'anna' should pass :(");
}
// madam
if (palindrome('madam') === true) {
  console.log("PASSED: 'madam' is a palindrome!!");
} else {
  console.log("FAIL:  'madam' should pass :(");
}

console.log('-- Edge Case Tests -- ');

// a man a plan a canal panama
if (palindrome('a man a plan a canal panama') === true) {
  console.log("PASSED: 'a man a plan a canal panama' is a palindrome!!");
} else {
  console.log("FAIL:  'a man a plan a canal panama' should pass :(");
}

// nurses run
if (palindrome('nurses run') === true) {
  console.log("PASSED: 'nurses run' is a palindrome!!");
} else {
  console.log("FAIL:  'nurses run' should pass :(");
}
const palindrome = require('./palindrome');

console.log("----- Tests -----");

if (palindrome('abba') === true) {
  console.log('PASSED: abba is a palidnrome');
} else {
  console.log("FAILED: abba should return TRUE, because it's a palindrome");
}


if (palindrome('hello') === false) {
  console.log('PASSED: hello is NOT a palidnrome');
} else {
  console.log("FAILED: hello should return FALSE, because it's a palindrome");
}

if (palindrome('racecar') === true) {
  console.log('PASSED: racecar is a palidnrome');
} else {
  console.log("FAILED: racecar should return TRUE, because it's a palindrome");
}

if (palindrome('kayak') === true) {
  console.log('PASSED: kayak is a palidnrome');
} else {
  console.log("FAILED: kayak should return TRUE, because it's a palindrome");
}

if (palindrome('deified') === true) {
  console.log('PASSED: deified is a palidnrome');
} else {
  console.log("FAILED: deified should return TRUE, because it's a palindrome");
}

if (palindrome('mom') === true) {
  console.log('PASSED: mom is a palidnrome');
} else {
  console.log("FAILED: mom should return TRUE, because it's a palindrome");
}

console.log('------ Edge Cases Tests ----');

if (palindrome('a man a plan a canal panama') === true) {
  console.log('PASSED: "a man a plan a canal panama" is a palindrome');
} else {
  console.log("FAILED: 'a man a plan a canal panama' should return TRUE, because it's a palindrome");
}

if (palindrome('nurses run') === true) {
  console.log('PASSED: "nurses run" is a palindrome');
} else {
  console.log("FAILED: 'nurses run' should return TRUE, because it's a palindrome");
}

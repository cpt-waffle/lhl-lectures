const helper = require('./palindrome');
const assert = require('chai').assert;

// console.log(assert);

console.log("----------- SAMPLETESTS.js<<<<<<<<<<<<<<<<<<<");

assert.isOk(helper.palindrome('kayak'));

assert.isTrue(helper.palindrome('racecar'));

if (helper.palindrome('kayak') === true) {
  console.log("Pass, Kayak is a palindrome");
} else {
  console.log("Fail: kayak should return true");
}
/////////////////

if (helper.palindrome('racecar') === true) {
  console.log("Pass, racecar is a palindrome");
} else {
  console.log("Fail: racecar should return true");
}
///

if (helper.palindrome('taco cat') === true) {
  console.log("Pass, taco cat is a palindrome");
} else {
  console.log("Fail: taco cat should return true");
}
/////////////////

if (helper.palindrome('a man a plan a canal panama') === true) {
  console.log("Pass, a man a plan a canal panama is a palindrome");
} else {
  console.log("Fail: a man a plan a canal panama should return true");
}

if (helper.palindrome('LEvEl') === true) {
  console.log("Pass, LEvEl is a palindrome");
} else {
  console.log("Fail: LEvEl should return true");
}
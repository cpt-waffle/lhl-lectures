const chai = require("chai");
const assert = chai.assert;
const palindrome = require('../palindrome');


describe('palindrome tests', () => {
  it(' checks if racecar is a palindrome', () => {
    assert.isTrue(palindrome('racecar'));
  })
  it(' checks if level is a palindrome', () => {
    assert.isTrue(palindrome('level'));
  })
  it(' checks if kayak is a palindrome', () => {
    assert.isTrue(palindrome('kayak'));
  })
  it(' checks if rotator is a palindrome', () => {
    assert.isTrue(palindrome('rotator'));
  })
  it(' checks if bob is a palindrome', () => {
    assert.isTrue(palindrome('bob'));
  })
})

describe('edge cases for palindrome', () => {
  it(' checks if "taco cat" is a palindrome' , () => {
   assert.isTrue( palindrome('taco cat'))
  })
  it(' checks if "a man a plan a canal panama" is a palindrome' , () => {
    assert.isTrue(palindrome('a man a plan a canal panama'))
  })
})
const palindrome = require('../palindrome');
const chai = require('chai');
const assert = chai.assert;

describe('--- Palindrome Tests ---', () => {
  describe('palindrome simple tests', () => {
    it(' tests if racecar is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('racecar'));
    })

    it(' tests if level is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('level'));
    })

    it(' tests if abba is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('abba'));
    })

    it(' tests if kayak is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('kayak'));
    })

    it(' tests if madam is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('madam'));
    })
  })
  
  describe('palidrome edge cases', () => {
    it(' tests if "taco cat" is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('taco cat'));
    })

    it(' tests if "nurses run" is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('nurses run'));
    })

    it(' tests if "a man a plan a canal panama" is a palindrome (should return true)', () => {
      assert.isTrue(palindrome('a man a plan a canal panama'));
    })

  })
})
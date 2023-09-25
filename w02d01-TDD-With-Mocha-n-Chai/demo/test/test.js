const palindrome = require('../palindrome');
const assert = require('chai').assert;

describe('Palindrome Tests', () => {
  describe('-- Basic Tests --', () => {
    it(" checks if 'hello' is NOT a palindrome, should return false", () => {
      assert.isFalse(palindrome('hello'));
    })

    it(" checks if 'racecar' is a palindrome, should return TRUE", () => {
      assert.isTrue(palindrome('racecar'));
    })

    it(" checks if 'level' is a palindrome, should return TRUE", () => {
      assert.isTrue(palindrome('level'));
    })

    it(" checks if 'anna' is a palindrome, should return TRUE", () => {
      assert.isTrue(palindrome('anna'));
    })

    it(" checks if 'madam' is a palindrome, should return TRUE", () => {
      assert.isTrue(palindrome('madam'));
    })
  })
  describe(' -- Edge Case Tests --', () => {
    it(" checks if 'nurses run' is a palindrome, should return TRUE", () => {
      assert.isTrue(palindrome('nurses run'));
    })
    it(" checks if 'a man a plan a canal panama' is a palindrome, should return TRUE", () => {
      assert.isTrue(palindrome('a man a plan a canal panama'));
    })
  })

})
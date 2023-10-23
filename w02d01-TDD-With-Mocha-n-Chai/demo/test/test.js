const palindrome = require('../palindrome');
const assert = require('chai').assert;

describe('Palindrome Functions Tests', () => {
  describe('regular tests', () => {
    it('checks if abba is a palindrome', () => {
      assert.isTrue(palindrome('abba'));
    })

    it('checks if hello is NOT palindrome', () => {
      assert.isFalse(palindrome('hello'));
    })

    it('checks if kayak is a palindrome', () => {
      assert.isTrue(palindrome('kayak'));
    })

    it('checks if deified is a palindrome', () => {
      assert.isTrue(palindrome('deified'));
    })

    it('checks if mom is a palindrome', () => {
      assert.isTrue(palindrome('mom'));
    })
  
  })

  describe('edge cases tests', () => {

    it('checks if a man a plan a canal panama is a palindrome', () => {
      assert.isTrue(palindrome('a man a plan a canal panama'));
    })
    it('checks if nurses run is a palindrome', () => {
      assert.isTrue(palindrome('nurses run'));
    })
  })

})
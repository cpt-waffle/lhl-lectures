const assert = require('chai').assert;
const palimdrone = require('../palindrome');
const error = new Error('Bad!');
// console.log(new Error("test"));
describe('Palindrome Tests', () => {
  it(' checks that "abba" is a palindrome', () => {
    assert.isTrue(palimdrone('abba'));
  })
  it(' check that "nurses run" is a palindrome', () => {
    assert.equal(palimdrone('nurses run'), true );
  })

  describe('EDGE CASES!', () => {
    it( 'takes in an empty array, and should return false', () => {
      assert.equal(palimdrone([]), false);
    })
  })
})
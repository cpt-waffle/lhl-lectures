const assert = require('chai').assert;
const palindrome = require('../palindrome');
// describe() ==> is a description of all the tests that are going to run.
// what are we testing? 
describe('palindrome tests', () => {
  describe('regular tests',() => {
    it( ' checks if ABBA is a palindrome' , () => {
      assert.isTrue(palindrome('ABBA'));
    })
    it( ' checks if racecar is a palindrome' , () => {
      assert.strictEqual(palindrome('racecar'), true, 'should return true' );
    })

  })
  describe('edge cases',() => {
    it( ' checks if 2 + 2 is equal to 4' , () => {
      assert.equal(2 + 2, 4);
    })
  })
})

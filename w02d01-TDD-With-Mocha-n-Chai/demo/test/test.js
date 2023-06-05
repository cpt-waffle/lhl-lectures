const assert = require('chai').assert;
const helper = require('../palindrome');

// console.log(assert);

describe('sample test', () => {
  it('checks if 1 + 1 is equal to 2', () => {
    const result = 1 + 1;
    assert.equal(result, 2);
  })
})

describe('palindrome tests', () => {
  it ('checks if kayak is a palindrome', () => {
    assert.isTrue(helper.palindrome('kayak'));
  })
  it ('checks if racecar is a palindrome', () => {
    assert.isTrue(helper.palindrome('racecar'));
  })
  describe('palindrome -- edge cases ', () => {
    it ('checks if "taco cat" is a palindrome', () => {
      assert.isTrue(helper.palindrome('taco cat'));
    })
    
    it ('checks if "a man a plan a canal panama" is a palindrome', () => {
      assert.isTrue(helper.palindrome('a man a plan a canal panama'));
    })

    it ('checks if LEvEl is a "taco cat"', () => {
      assert.isTrue(helper.palindrome('LEvEl'));
    })
  })
})
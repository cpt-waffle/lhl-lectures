const assert = require('chai').assert;
const palindrome = require('../palindrome');

describe('Sample Quick Test', () => {
  it(' checks if 2 + 2 ie equal to 4', () => {
    const result = 2 + 2;
    assert.equal(result, 4);
  })
})

describe('Palindrome Tests', () => {
  describe('Regular Tests', () => {
    it(' checks that level is a palindrome', () => {
      assert.isTrue(palindrome('level'), "FAIL: level is a PALINDROME and should return TRUE");
    })

    it(' checks that kayak is a palindrome', () => {
      assert.isTrue(palindrome('kayak'), 'FAIL: kayak is a PALINDROME and should return TRUE');
    })

    it(' checks if racecar is a palindrome', () => {
      assert.isTrue(palindrome('racecar'), "FAIL: racecar is a PALINDROME and should return TRUE");
    })

    it(' checks if noon is a plaindrome', () => {
      assert.isTrue(palindrome('noon'), "FAIL: noon is a PALINDROME and should return TRUE");
    })
  })

  describe("Edge Cases Tests", () => {
    it('checks if my gym is a palindrome ', () => {
      assert.isTrue(palindrome('my gym'), "FAIL: 'my gym' is a PALINDROME and should return TRUE");
    })

    it('checks if a man a plan a canal panama is a palindrome', () => {
      assert.isTrue(palindrome('a man a plan a canal panama'), "FAIL: 'a man a plan a canal panama' is a PALINDROME and should return TRUE");
    })
  })


})

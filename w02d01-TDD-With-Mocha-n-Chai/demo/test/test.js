const assert = require('chai').assert;
const palindrome = require('../palindrome');

describe('Palindrome Tests', function(){
  it(' checks if kayak is a palindrome', function() {
    assert.isTrue(palindrome('kayak'), 'kayak IS a palindrome');
  })
  it(' checks if madam IS a palindrome', function() {
    assert.isTrue(palindrome('madam'), 'madam IS a palindrome');
  })
  it(' checks if civic IS a palindrome', function() {
    assert.isTrue(palindrome('civic'), 'civic IS a palindrome');
  })
  it(' checks if level IS a palindrome', function() {
    assert.isTrue(palindrome('level'), 'level IS a palindrome');
  })
}) 

describe("Palindrome Edge Case Tests", function() {
  it('checks if "my gym" IS a palindrome', function() {
    assert.isTrue(palindrome('my gym'), 'my gym" IS a palindrome')
  })
  
  it('checks if "a man a plan a canal panama" IS a palindrome', function() {
    assert.isTrue(palindrome('a man a plan a canal panama'), '"a man a plan a canal panama" IS a palindrome')
  })
})
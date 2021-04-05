const { expect } = require('chai')
const palindrome = require('../palindrome');

describe("Edge Cases Tests for Palindrome", () => {
    it('should return false when a number is passed', function() {
        expect(palindrome(1221)).to.equal(false);
    });
    it('should return false when an empty string is passed', function() {
        expect(palindrome("")).to.equal(false);
    });

    it('should return false when palidrome is called without any paramters', function() {
        expect(palindrome()).to.equal(false);
    })
})

describe('Happy Path Cases for palindrome', () => {
    it('should return true for the word racecar', () => {
        expect(palindrome('racecar')).to.equal(true);
    })

    it('should return false for hello because its not a palindrome', () => {
        expect(palindrome('hello')).to.equal(false);
    })

    it('should return true for a multi word palindrome', () => {
        expect(palindrome('was it a car or a cat i saw')).to.equal(true);
    })

    it('should return false for multi word non-palindrome', () => {
        expect(palindrome('hello world')).to.equal(false);
    })
})

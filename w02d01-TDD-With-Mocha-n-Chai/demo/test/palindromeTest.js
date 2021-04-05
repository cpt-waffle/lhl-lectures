const palindrome = require('../palindrome');



const { expect } = require('chai');

describe('palindrome tests,', () => {
    it ('should return true for racecar because it is a palindrome', () => {
        expect(palindrome('racecar')).to.equal(true);
    }) 
})
const numOfVowels = require('../numOfVowels');
const { expect } = require('chai');

describe('numofVowels tests!', () => {
    it ('checks that tomato has 3 vowels', () => {
        expect(numOfVowels('tomato')).to.equal(3);
    })
})
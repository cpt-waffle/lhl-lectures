const palindrome = require('../palindrome');
const assert = require('chai').assert;

describe('My first Test!', () => {
    it('tests 1+1', () => {
    
    })
})

describe('palindrome tests', () => {
    it('takes abba as input, and returns true', () => {
        assert.isTrue(palindrome('abba'));
    })

    it('takes "my gym" as input, ignores spaces, and returns true', () => {
        assert.isTrue(palindrome('my gym'));
    })

    describe('EDGE CASES', () => {
        it('takes an empty string and returns false', () => {
            assert.equal(palindrome(''), false);
        })
        it('takes "RacEcAr" string, and returns true', () => {
            assert.isTrue(palindrome("RacEcAr"));
        })
    })
})
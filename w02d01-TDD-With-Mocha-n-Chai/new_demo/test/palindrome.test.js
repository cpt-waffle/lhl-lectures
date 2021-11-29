const assert = require('chai').assert;
const palidrome = require('../palindrome')

describe('Palidrome Tests (regular)', () => {
    it("checks that 'abba' is a palindrome", () => {
        const testStr = 'abba';
        const expectedAnswer = true;
        assert.equal(palidrome(testStr), expectedAnswer);
    })
    it("checks that 'Sator arepo tenet opera rotas' is a palindrome", () => {
        assert.equal(palidrome('sator arepo tenet opera rotas'), true);
    })
})

describe('Palindrome Tests (edge cases)', () => {
    it("checks if '  abba ' is a palindrome", () => {
        assert.equal(palidrome('  abba '), true );
    })

    it("checks if 'Sator arepo tenet opera rotas ' is a palidrome", () => {
        assert.equal(palidrome('Sator arepo tenet opera rotas '), true);
    })
})


/// we NEVER tested uppercase and lowerCase!
// a describe block 
// inside of describe block we have tests/it blocks !
// inside of test/it blocks we have our checks
import sum from '../helper'

describe('Basic Tests', () => {
    it('Checks if 2 + 2 is equal 4', () => {
        const answer = 2 + 2;
        expect(answer).toBe(4);
    })

    it('does a sum of 4 + 4 and short return 8', () => {
        expect(sum(4, 4)).toBe(8);
    })
})
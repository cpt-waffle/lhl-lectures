import sum from '../sum'


// describe block
describe('Basic sum Tests', () => {
  // test or it blocks
  it('checks if 2 + 2 is equal to 4', () => {
    const answer = 2 + 2;
    expect(answer).toBe(4);
  })

  it('checks if sum(2,2) returns 4', () => {
    const answer = sum(2,2);
    expect(answer).toBe(4);
  })

})
import sum from '../sum';

describe('Sum Tests', () => {
  test(' if 2 + 2 is equal to 4', () => {
    expect(sum(2,2)).toBe(4);
  })

  it(' adds 3 and 3 to see if its 6', () => {
    expect(sum(3,3)).toBe(6);
  })
})
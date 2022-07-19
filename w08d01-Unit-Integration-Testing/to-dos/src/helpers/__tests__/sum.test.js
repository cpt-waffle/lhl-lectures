import sum from '../sum'
// describe block
describe('Sum Tests', () => {
  it(' checks if 2 + 2 is equal to 4', () => {
    expect(sum(2,2)).toBe(4);
  })

  test(' if 2 + 2 is equal to 4', () => {
    expect(sum(2,2)).toBe(4);
  })
})
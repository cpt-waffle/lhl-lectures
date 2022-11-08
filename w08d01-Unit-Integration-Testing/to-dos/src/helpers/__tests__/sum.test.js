import sum from '../sum'

describe('Sum Tests', () => {

  test('if 2 + 2 is equal to 4', () => {
    expect(sum(2,2)).toBe(4);
  })

  it(' adds 2 + 2 and checks if result is 4', () => {
    expect(sum(2,2)).toBe(4);
  })
})
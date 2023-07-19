import sum from '../sum';

// describe block
describe('sum tests', () => {
  // it/test
  it('checks if 2 + 2 is equal to 4', () => {
    expect(sum(2,2)).toEqual(4)
  })

  test('if 2 + 2 is equal to 4', () => {
    expect(sum(2,2)).toEqual(4)
  })
})
// expect
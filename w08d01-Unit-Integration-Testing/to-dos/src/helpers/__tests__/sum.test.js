
// describe()
// test() or it()

describe('sum tests', () => {
  test('if 2 + 2 is equal to 4', () => {
    expect(2+2).toBe(4);
  })

  it('tests for 2 + 2 is equal to 4', () => {
    expect(2+2).toBe(4);
  })
})
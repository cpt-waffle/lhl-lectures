// describe block
// testing blocks

describe('sum tests', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).toEqual(4);
  })

  test(" for 2 + 2 is equal to 4", () => {
    expect(2+2).toBe(4);
  })
})
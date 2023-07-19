//describe
import sum from '../sum'

describe(' sum tests', () => {
  it('adds 2 + 2 and checks if it equals to 4', () => {
    expect(sum(2,2)).toEqual(4);
  })

  test('if function retuns 4, when passing arguments 2 and 2', () => {
    expect(sum(2,2)).toEqual(4);
  })
})
//it/test
//expectations
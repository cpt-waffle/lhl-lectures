import { renderHook, act } from '@testing-library/react-hooks'
import useColor from '../useColor';

describe('useColor tests', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).toBe(4);
  })

  // only runs this test, and skips everything else
  // it.only
  test('for an array of colors, and returns a currentColor to be equal to "red"', () => {
    const colorsArr = ['red', 'rebeccapurple', 'goldenrod', 'firebrick', 'blue'];
    const { result } = renderHook(() => useColor(colorsArr));
    expect(result.current.currentColor).toBe('red');
  })

  // skips this specific test
  // xit
  it('takes in an array of colors, then runs the next() function and the color changes from red, to rebecca purple', () => {
    const colorsArr = ['red', 'rebeccapurple', 'goldenrod', 'firebrick', 'blue'];
    const { result } = renderHook(() => useColor(colorsArr));
    expect(result.current.currentColor).toBe('red');
    act(() => {
      result.current.next();
    })
    expect(result.current.currentColor).toBe('rebeccapurple');
  })

  it('takes in an array of colors, then runs the next() function and the color changes from red, to rebecca purple, then clicks back and the color should be red', () => {
    const colorsArr = ['red', 'rebeccapurple', 'goldenrod', 'firebrick', 'blue'];
    const { result } = renderHook(() => useColor(colorsArr));
    expect(result.current.currentColor).toBe('red');
    act(() => {
      result.current.next();
    })
    expect(result.current.currentColor).toBe('rebeccapurple');
    act(() => {
      result.current.prev();
    })
    expect(result.current.currentColor).toBe('red');
  })

  it('takes in array of colors, goes back(), but the default color stays the same due to being the first element', () => {
    const colorsArr = ['red', 'rebeccapurple', 'goldenrod', 'firebrick', 'blue'];
    const { result } = renderHook(() => useColor(colorsArr));
    act(() => {
      result.current.prev();
    })
    expect(result.current.currentColor).toBe('red');
  })

})
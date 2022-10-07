import useColor from '../useColor';
import { renderHook, act } from '@testing-library/react-hooks'

describe('useColor tests!', () => {

  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).toBe(4);
  })

  it('takes in an array, and returns first value of the array', () => {
    const colorArr = ['rebeccapurple', 'firebrick', 'blue', 'limegreen'];
    const { result } = renderHook(() => useColor(colorArr));

    expect(result.current.currentColor).toBe('rebeccapurple');
  })

  it('takes in an array, switches the the color with the function next(), and the new color should be FIREBRICK', () => {
    const colorArr = ['rebeccapurple', 'firebrick', 'blue', 'limegreen'];
    const { result } = renderHook(() => useColor(colorArr));
    act(() => {
      result.current.next();
    })
    expect(result.current.currentColor).toBe('firebrick');
  })

  xit('takes in an array, switches the the color with the function next() then prev(), and the new color should be rebeccapurple', () => {
    const colorArr = ['rebeccapurple', 'firebrick', 'blue', 'limegreen'];
    const { result } = renderHook(() => useColor(colorArr));
    act(() => {
      result.current.next();
    })
    expect(result.current.currentColor).toBe('firebrick');
    act(() => {
      result.current.prev();
    })
    expect(result.current.currentColor).toBe('rebeccapurple');
  })

})
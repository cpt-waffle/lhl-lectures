import { renderHook, act } from '@testing-library/react-hooks'
import useColor from "../useColor"

describe('useColor Tests!', () => {
  it.only('takes in array of colors, returns us an object with a key called currentColor that is set to be the first color of the array', () => {
    const array = ['red', 'blue', 'green', 'yellow', 'purple'];
    const { result } =renderHook(() => useColor(array)); 
    expect(result.current.currentColor).toBe('red');
  })

  it.only('takes in an array of colors, starts with red, fire a function called next(), switches to the next color, which should be blue', () => {
    const array = ['red', 'blue', 'green', 'yellow', 'purple'];
    const { result } =renderHook(() => useColor(array)); 
    expect(result.current.currentColor).toBe('red');
    console.log(result.current);
    act(() => {
      result.current.next();
    })

    expect(result.current.currentColor).toBe('blue');

  })

  it('takes in an array of colors, starts with red, fire a function called next(), switches to the next color, then run function back(), and go back to red', () => {
    const array = ['red', 'blue', 'green', 'yellow', 'purple'];
    const { result } =renderHook(() => useColor(array)); 
    expect(result.current.currentColor).toBe('red');
    console.log(result.current);
    act(() => {
      result.current.next();
    })
    expect(result.current.currentColor).toBe('blue');
    act(() => {
      result.current.back();
    })
    expect(result.current.currentColor).toBe('red');
  })
})

describe("EDGE CASES", () => {
  it('tries to go back farther than the first element, should return first element', () => {
    const array = ['red', 'blue', 'green', 'yellow', 'purple'];
    const { result } =renderHook(() => useColor(array)); 
    act(() => {
      result.current.back();
    })
    act(() => {
      result.current.back();
    })
    act(() => {
      result.current.back();
    })
    expect(result.current.currentColor).toBe('red');

  })
})
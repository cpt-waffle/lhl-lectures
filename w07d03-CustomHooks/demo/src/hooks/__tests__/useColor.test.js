import useColor from "../useColor";
import { renderHook, act } from '@testing-library/react-hooks';

describe('useColor Tests', () => {
  it(' runs useColor and passes an array of colors, the useColor() returns us the current selectedColor [red, green, blue, lime, yellow]  red', () => {
    const array = ['red', 'green', 'blue', 'lime', 'yellow'];
    const { result } = renderHook(() => useColor(array));
    // result.current -- returns us what the custom hook returns
    expect(result.current.currentColor).toBe('red');
  })

  it(' takes an array of colors, starts with red, then we run the next() function, the color changes to green', () => {
    const array = ['red', 'green', 'blue', 'lime', 'yellow'];
    const { result } = renderHook(() => useColor(array));
    expect(result.current.currentColor).toBe('red');

    act(() => {
      result.current.next();
    })

    expect(result.current.currentColor).toBe('green');
  })

  it(' takes an array of colors, starts with red, then we run the next() function, the color changes to green, then runs the prev() function, changes back to red', () => {
    const array = ['red', 'green', 'blue', 'lime', 'yellow'];
    const { result } = renderHook(() => useColor(array));
    expect(result.current.currentColor).toBe('red');
    
    act(() => {
      result.current.next();
    })

    expect(result.current.currentColor).toBe('green');

    act(() => {
      result.current.prev();
    })

    expect(result.current.currentColor).toBe('red');

  })

})
import useColor from "../useColor";
import { renderHook, act } from '@testing-library/react-hooks';

describe('first test ever!', () => {
  test(' if 2 + 2 ie equal to 4', () => {
    expect(2+2).toBe(4);
  })

  it(' tests for 2 + 2 is equal to 4', () => {
    expect(2+2).toBe(4);
  })
})


describe('useColor tests', () => {
  it('takes in an array of colors, and returns the current color', () => {
    const colors = ['green', 'red', 'blue', 'purple', 'white', 'lime'];
    const {result} = renderHook(() => useColor(colors));
    expect(result.current.currColor).toBe('green');
  })

  it('takes in an array of colors, and runs the next() function which switches the color to RED', () => {
    const colors = ['green', 'red', 'blue', 'purple', 'white', 'lime'];
    const {result} = renderHook(() => useColor(colors));
    expect(result.current.currColor).toBe('green');
    act(() => {
      result.current.next();
    })
    expect(result.current.currColor).toBe('red');
    console.log(result.current);
  })

  it('takes in an array of colors, and runs the next() then runs prev() and color is back to GREEN', () => {
    const colors = ['green', 'red', 'blue', 'purple', 'white', 'lime'];
    const {result} = renderHook(() => useColor(colors));
    expect(result.current.currColor).toBe('green');
    act(() => {
      result.current.next();
    })
    expect(result.current.currColor).toBe('red');
    act(() => {
      result.current.prev();
    })
    expect(result.current.currColor).toBe('green');

    console.log(result.current);
  })
})


// [state, setState] = useState({...})

// setDay
// setDays

// useApplication.js
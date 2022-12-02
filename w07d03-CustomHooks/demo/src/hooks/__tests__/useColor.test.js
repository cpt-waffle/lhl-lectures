import useColor from '../useColor';
import { renderHook, act } from '@testing-library/react-hooks'

describe('first ever test in jest', () => {
  test(' if 2 + 2 is equal to 4', () => {
    //expect toBe
    expect(2+2).toBe(4);
  })

  it(' tests if 2 + 2 is equal to 4', () => {
    expect(2+2).toBe(4);
  })
})

describe('useColor tests', () => {
  it('takes an array of colors, returns back an object with the current color selected', () => {
    const colors = ['purple', 'red', 'goldrenrod', 'rebeccapurple', 'firebrick', 'blue'];

    const { result } = renderHook(() => useColor(colors))
    // result.current, is whatever my customHook returns!!!

    expect(result.current.currColor).toBe('purple');
  }) 

  it('takes an array of colors, runs a function called NEXT, and switches the color to the next one in the array (RED)', () => {
    const colors = ['purple', 'red', 'goldrenrod', 'rebeccapurple', 'firebrick', 'blue'];
    const { result } = renderHook(() => useColor(colors))

    act(() => {
      result.current.next();
    })

    expect(result.current.currColor).toBe('red');
  })

  it('takes an array of colors, runs a function called NEXT, then runs a function called PREV, the current color should be PURPLE', () => {
    const colors = ['purple', 'red', 'goldrenrod', 'rebeccapurple', 'firebrick', 'blue'];
    const { result } = renderHook(() => useColor(colors))

    act(() => {
      result.current.next();
    })
    act(() => {
      result.current.prev();
    })

    expect(result.current.currColor).toBe('purple');
  })
})

/// useVisualMode

// EMPTY

// EMPTY, FORM

// EMPTY

// FIRST, SECOND, THIRSD

//////////////

// EMPTY

// EMPTY FORM

// SHOW


// SHOW
// SHOW, FORM
// SHOW
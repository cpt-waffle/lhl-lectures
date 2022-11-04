// __tests__
// .test.js

import { renderHook, act } from '@testing-library/react-hooks'
import useColor from '../useColor'



describe('first tests', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2 + 2).toBe(4);
  })

})


describe('useColor Tests', () => {
  it.only('takes an array of colors, returns back an object with CURRENT color being purple', () => {
    const colors = ['purple', 'red', 'goldenrod', 'firebrick', 'limegreen'];
    const { result } = renderHook(() =>useColor(colors));
    console.log(result.current);
    expect(result.current.currColor).toBe('purple');
  })

  it.only('takes an array of colors, runs the NEXT() method, and then changes color to red', () => {
    const colors = ['purple', 'red', 'goldenrod', 'firebrick', 'limegreen'];
    const { result } = renderHook(() =>useColor(colors));
    act(() => {
      result.current.next() 
    })
    expect(result.current.currColor).toBe('red');
  })

  it.only('takes an array of colors, runs the NEXT() method, then runs the PREV() method and then changes color to purple', () => {
    const colors = ['purple', 'red', 'goldenrod', 'firebrick', 'limegreen'];
    const { result } = renderHook(() =>useColor(colors));
    act(() => {
      result.current.next() 
    })
    expect(result.current.currColor).toBe('red');
    act(() => {
      result.current.prev() 
    })
    expect(result.current.currColor).toBe('purple');
  })
})
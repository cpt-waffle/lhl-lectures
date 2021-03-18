// import the hook
import useColors from '../useColors';
//import renderHook and act from testing-library
import { renderHook, act } from '@testing-library/react-hooks'

it('checks if 2 + 2 is equal to 4', () => {
    const result = 2 + 2; 
    expect(result).toBe(4);
})

it('sets an array of colors that are passed, and sets the current color to first element in the array', () => {
    const colors = ['salmon', 'firebrick', 'lime', 'green', 'red'];
    const { result } = renderHook(() => useColors(colors))
    // console.log(result.current);
    expect(result.current.state.currentColor).toBe('salmon') // salmon 
    expect(result.current.state.currentIndex).toBe(0)  //0
})


it('sets the colors passed, then we run the next() function which changes the color to the next one', () => {
    const colors = ['salmon', 'firebrick', 'lime', 'green', 'red'];
    const { result } = renderHook(() => useColors(colors))
    console.log(result.current)
    act(() => {
        result.current.next();
    })
    expect(result.current.state.currentColor).toBe('firebrick') // salmon 
    expect(result.current.state.currentIndex).toBe(1)  //0
})

it('sets the colors passed, then we run the next() then we run back() which changes it back to salmon', () => {
    const colors = ['salmon', 'firebrick', 'lime', 'green', 'red'];
    const { result } = renderHook(() => useColors(colors))
    console.log(result.current)
    act(() => {
        result.current.next();
        result.current.back();
    })

    expect(result.current.state.currentColor).toBe('salmon') // salmon 
    expect(result.current.state.currentIndex).toBe(0)  //0
})
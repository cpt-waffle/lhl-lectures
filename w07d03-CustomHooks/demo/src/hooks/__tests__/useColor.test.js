// it() test()
import { renderHook, act } from '@testing-library/react-hooks'
import useColor from '../useColor';

it('Checks if 2 + 2 is equal to 4', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
})
// we need a way to track what is the current color 
// in our array, and ways to go to the next color and the previous color 

it('takes in an array of colors, and has a defaultColor variable, which happens to be purple', () => {
    const arrayOfColors = ['purple', 'blue', 'green', 'yellow', 'red'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    console.log(result.current);
    expect(result.current.defaultColor).toBe('purple');
})

it('takes in an array of colors, and has a defaultColor variable, which happens to be green', () => {
    const arrayOfColors = ['green', 'blue', 'green', 'yellow', 'red'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    console.log(result.current);
    expect(result.current.defaultColor).toBe('green');
})

it('takes in an array of colors, CALLS the method NEXT and switches to the next color', () => {
    const arrayOfColors = ['green', 'blue', 'green', 'yellow', 'red'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    expect(result.current.defaultColor).toBe('green');
    act(() => {
        result.current.next();
    })
    expect(result.current.defaultColor).toBe('blue');
})

it('takes in an array of colors, CALLS the method NEXT 5 times, We expect to stay on red', () => {
    const arrayOfColors = ['green', 'blue', 'green', 'yellow', 'red'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    expect(result.current.defaultColor).toBe('green');
    act(() => {
        result.current.next();
    })
    act(() => {
        result.current.next();
    })
    act(() => {
        result.current.next();
    })
    act(() => {
        result.current.next();
    })
    act(() => {
        result.current.next();
    })
    expect(result.current.defaultColor).toBe('red');
})

it(' switches to the next color then back to previous', () => {
    const arrayOfColors = ['purple', 'blue', 'green', 'yellow', 'red'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    console.log(result.current);
    expect(result.current.defaultColor).toBe('purple');
    act(() => {
        result.current.next()
    })
    expect(result.current.defaultColor).toBe('blue');

    act(() => {
        result.current.prev()
    })
    expect(result.current.defaultColor).toBe('purple');
})
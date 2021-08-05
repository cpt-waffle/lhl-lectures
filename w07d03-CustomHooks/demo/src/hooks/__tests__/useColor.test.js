import { renderHook, act } from '@testing-library/react-hooks'
import useColor from '../useColor';


it('Checks if 2 + 2 is equal to 4', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
})

it('Takes in an array of values, and returns us a defaultColor, being the first element of the array', () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'white', 'salmon', 'black', 'firebrick'];
    const { result } = renderHook(() => useColor(colors));
    expect(result.current.defaultColor).toBe('red');
})

it(`takes in an array of values and returns a 
    default color. we then call a function next(), 
    which switches the default color to the next color in the array`, () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'white', 'salmon', 'black', 'firebrick'];
        const { result } = renderHook(() => useColor(colors));
        expect(result.current.defaultColor).toBe('red');
        act(() => {
            result.current.next();
        })
        expect(result.current.defaultColor).toBe('green');
})

it(`takes in an array of values and returns a 
    default color. we then call a function next(), 
    which switches the default color to the next color in the array. click next a few times`, () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'white', 'salmon', 'black', 'firebrick'];
        const { result } = renderHook(() => useColor(colors));
        expect(result.current.defaultColor).toBe('red');
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
        expect(result.current.defaultColor).toBe('white');
})

it(`takes in an array of values and returns a 
    default color. we then call a function next(), 
    which switches the default color to the next color in the array.
    We then call the function prev() that switches the color back to red`, () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'white', 'salmon', 'black', 'firebrick'];
        const { result } = renderHook(() => useColor(colors));
        expect(result.current.defaultColor).toBe('red');
        act(() => {
            result.current.next();
        })
        expect(result.current.defaultColor).toBe('green');
        console.log(result.current)
        act(() => {
            result.current.prev();
        })
        expect(result.current.defaultColor).toBe('red');
})

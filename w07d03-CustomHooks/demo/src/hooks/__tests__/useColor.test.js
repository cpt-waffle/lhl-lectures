import { renderHook, act } from '@testing-library/react-hooks'
import useColor from '../useColor';

describe('Tests for useColor customHook', () => {
    it(' 2 + 2 is equal to 4', () => {
        const result = 2 + 2;
        expect(result).toBe(4);
    })

    it("creates a customHook useColor, and takes in an array of colors, returns us the current color(RED)", () => {
        const colors = ['red', 'green', 'blue', 'salmon', 'lime'];
        const { result } = renderHook(() => useColor(colors));
        expect(result.current.currentColor).toBe('red');
    })

    it('creates custom Hook, sets the default, THEN we run the function NEXT(), which switches the color to green', () =>{
        const colors = ['red', 'green', 'blue', 'salmon', 'lime'];
        const { result } = renderHook(() => useColor(colors));
        expect(result.current.currentColor).toBe('red');
        act(() => {
            result.current.next();
        })
        expect(result.current.currentColor).toBe('green');
    })

    it('switches to next color (green) and then when we run previous() , it switches back to red', () =>{
        const colors = ['red', 'green', 'blue', 'salmon', 'lime'];
        const { result } = renderHook(() => useColor(colors));
        expect(result.current.currentColor).toBe('red');
        act(() => {
            result.current.next();
        })
        expect(result.current.currentColor).toBe('green');
        act(() => {
            result.current.previous();
        })
        expect(result.current.currentColor).toBe('red');
    })


    it('goes all the way to the end of list, and even through we keep clicking next(), it wont go off the last element', () => {
        const colors = ['red', 'green', 'blue'];
        const { result } = renderHook(() => useColor(colors));
        expect(result.current.currentColor).toBe('red');
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
        expect(result.current.currentColor).toBe('blue');
    })

})
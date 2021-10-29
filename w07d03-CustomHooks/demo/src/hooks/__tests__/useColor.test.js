import { renderHook, act } from '@testing-library/react-hooks';
import useColor from '../useColor';

describe('Tests for useColor', () => {
    xit(' check if 2 + 2 is equal to 4', () => {
        expect(2+2).toBe(4);
    })

    it( 'takes in an array of colors, and uses 1 of those colors as the defaultColor', () => {
        const arrayOfColors = ['red', 'green', 'blue', 'white', 'gray', 'black'];
        const { result } = renderHook(() => useColor(arrayOfColors)); // <---- HOW DO I GET ARRAY OF COLORS 
        // INTO MY useColor
        // result.current <---- is the return value  that comes from our custom hook!
        expect(result.current.defaultColor).toBe('red');
    })

    it('switches between the colors using the next() function, and the currentColor changes to green', () => {
        const arrayOfColors = ['red', 'green', 'blue', 'white', 'gray', 'black'];
        const { result } = renderHook(() => useColor(arrayOfColors)); // <---- HOW DO I GET ARRAY OF COLORS 
        expect(result.current.defaultColor).toBe('red'); 
        act(() => {
            result.current.next();
        })
        expect(result.current.defaultColor).toBe('green');
    })
    it('clicks next() twice, AND the current is now blue', () => {
        const arrayOfColors = ['red', 'green', 'blue', 'white', 'gray', 'black'];
        const { result } = renderHook(() => useColor(arrayOfColors)); // <---- HOW DO I GET ARRAY OF COLORS 
        expect(result.current.defaultColor).toBe('red'); 
        act(() => {
            result.current.next();
        })
        act(() => {
            result.current.next();
        })
        expect(result.current.defaultColor).toBe('blue');
    })

    it('clicks next(), twice, then clicks prev() once, and the current color is now green', () => {
        const arrayOfColors = ['red', 'green', 'blue', 'white', 'gray', 'black'];
        const { result } = renderHook(() => useColor(arrayOfColors)); // <---- HOW DO I GET ARRAY OF COLORS 
        act(() => {
            result.current.next();
        })
        act(() => {
            result.current.next();
        })
        expect(result.current.defaultColor).toBe('blue');
        act(() => {
            result.current.prevColor();
        })
        expect(result.current.defaultColor).toBe('green');
    })

    it('tries to go back while at the begging of the list, but stay on red', () => {
        const arrayOfColors = ['red', 'green', 'blue', 'white', 'gray', 'black'];
        const { result } = renderHook(() => useColor(arrayOfColors)); // <---- HOW DO I GET ARRAY OF COLORS 
        act(() => {
            result.current.prevColor();
        })
        expect(result.current.defaultColor).toBe('red');
    })

})
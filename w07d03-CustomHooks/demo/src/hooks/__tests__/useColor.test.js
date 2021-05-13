import useColor from '../useColor';
import { renderHook, act } from '@testing-library/react-hooks'


it('checks if 2 + 2 is equal to 4', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
})
// ['firebrick', 'lime', 'purple', 'green', 'blue']
it('should take an array of colors, and have a defaultValue of the first color', () => {
    const arrayOfColors = ['firebrick', 'lime', 'purple', 'green', 'blue'];
    const { result } = renderHook(() => useColor(arrayOfColors));
    expect(result.current.currentColor).toBe('firebrick');
})

it('should take an array of colors, then when we call the next() function, the current color should be lime', () => {
    const arrayOfColors = ['firebrick', 'lime', 'purple', 'green', 'blue'];
    const { result } = renderHook(() => useColor(arrayOfColors));
    act(() => {
        result.current.next();
    })
    expect(result.current.currentColor).toBe('lime');
})

it("it should take an array of colors, run next(), run prev() functions, and the current color should be 'firebrick", () => {
    const arrayOfColors = ['firebrick', 'lime', 'purple', 'green', 'blue'];
    const { result } = renderHook(() => useColor(arrayOfColors));
    act(() => {
        result.current.next();
    })
    act(() => {
        result.current.prev();
    }) 
    expect(result.current.currentColor).toBe('firebrick');
})

it('should take an array of colors, and if we click prev() right away, the color should remain firebrick', () => {
    const arrayOfColors = ['firebrick', 'lime', 'purple', 'green', 'blue'];
    const { result } = renderHook(() => useColor(arrayOfColors));
    act(() => {
        result.current.prev();
    })
    expect(result.current.currentColor).toBe('firebrick');
})
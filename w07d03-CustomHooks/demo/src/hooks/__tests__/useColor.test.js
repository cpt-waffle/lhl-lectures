// it() or test()
import useColor from '../useColor';
import { renderHook, act } from '@testing-library/react-hooks'

it('checks if 2 + 2 is equal to 4', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
})

it('creates a useColor hook, with an array parameter, returns back the current color', () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    expect(result.current.defaultColor).toBe('firebrick');
})

it(`creates a usedColor hook, with an array paramter, 
    we run the function called NEXT() 
    which changes the currrent color 
    from firebrick to red`, () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    console.log(result.current)
    expect(result.current.defaultColor).toBe('firebrick');
    act(() => {
        result.current.next();
    });
    expect(result.current.defaultColor).toBe('red');
})

it(`sets a default array in useColor hook, and clicks next() twice. result should be green`, () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    console.log(result.current)
    expect(result.current.defaultColor).toBe('firebrick');
    act(() => {
        result.current.next();
    });
    expect(result.current.defaultColor).toBe('red');
    act(() => {
        result.current.next();
    });
    expect(result.current.defaultColor).toBe('green');
})

it('sets a default array, runs next() once, then runs prev() once. result should be firebrick', () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors));
    expect(result.current.defaultColor).toBe('firebrick');
    act(() => {
        result.current.next();
    });
    expect(result.current.defaultColor).toBe('red');
    act(() => {
        result.current.prev();
    });
    console.log(result.current);
    expect(result.current.defaultColor).toBe('firebrick');


})
import useColor from '../useColor'
import { renderHook, act } from '@testing-library/react-hooks'

const colorArray = ['firebrick', 'lime', 'salmon', 'orange', 'rebeccapurple'];


it('takes in a color array, and sets the current color to the first elemnt in the array', () => {
    const { result } = renderHook(() => useColor(colorArray))
    // result.current.currentColor should be equal to firebrick
    console.log(result.current)
    expect(result.current.currentColor).toBe('firebrick');
})

it('it takes in a color array, and uses a function called next() to switch to the next color (LIME)', () => {
    const { result } = renderHook(() => useColor(colorArray))
    act(() => {
        result.current.next();
    })
    expect(result.current.currentColor).toBe('lime');
})

it(`it takes in a color array, and uses a 
function called next() to switch to the next color 
(LIME), calls back() to go back a color (FIREBRICK)`, () => {
    const { result } = renderHook(() => useColor(colorArray))
    act(() => {
        result.current.next();
        result.current.back();
    })
    expect(result.current.currentColor).toBe('firebrick');

})
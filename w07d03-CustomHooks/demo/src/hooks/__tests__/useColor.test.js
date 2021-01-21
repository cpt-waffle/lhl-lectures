import useColor from '../useColor'
import { renderHook, act } from '@testing-library/react-hooks'

it('sets the color to default color RED', () => {
    const { result } = renderHook(() => useColor('red', ['green', 'blue']));
    expect(result.current.currentColor).toBe('red');
})

it('switches to the next color which it will be green', () => {
    const { result } = renderHook(() => useColor('red', ['green', 'blue']));
    act(() => {
        result.current.nextColor();
    })

    expect(result.current.currentColor).toBe('green');
})

it('switches to the next color and switches back to the original', () => {
    const { result } = renderHook(() => useColor('red', ['green', 'blue']));
    act(() => {
        result.current.nextColor();
    })

    expect(result.current.currentColor).toBe('green');
    act(() => result.current.prevColor());
    expect(result.current.currentColor).toBe('red');

})
import { renderHook, act } from '@testing-library/react-hooks';
import useColor from '../useColor';

// xit ignore THIS test
// it.only RUN ONLY THIS TEST ignore the others...

xit(' checks if 2 + 2 is equal to 4', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
})

it('sets an array of colors that are passed, and sets the current color to the first element in the array', () => {
    const colors = ['salmon', 'lime', 'firebrick', 'red', 'blue', 'green']
    const { result } = renderHook( () => useColor(colors));
    // we must have a variable/state called currColor = 'salmon'
    expect(result.current.curColor).toBe('salmon');
})

it ('stes another array of colors that are passed, and sets the current color to be the first elememnt in the array but its different color', () =>{
    const colors = ['red', 'lime', 'firebrick', 'red', 'blue', 'green']
    const { result } = renderHook( () => useColor(colors));
    // we must have a variable/state called currColor = 'salmon'
    expect(result.current.curColor).toBe('red');
})

it ('runs a function called next(), which changes the color from the first color to the second one', () => {
    const colors = ['red', 'lime', 'firebrick', 'red', 'blue', 'green']
    const { result } = renderHook( () => useColor(colors));
    expect(result.current.curColor).toBe('red');
    act( () => {
        result.current.next();
    })
    expect(result.current.curColor).toBe('lime');
})


it ('runs a function called next(), which changes the color from the first color to the second one, then calls the function back()', () => {
    const colors = ['red', 'lime', 'firebrick', 'red', 'blue', 'green']
    const { result } = renderHook( () => useColor(colors));
    expect(result.current.curColor).toBe('red');
    act( () => {
        result.current.next();
    })
    expect(result.current.curColor).toBe('lime');
    act( () => {
        result.current.back();
    })
    expect(result.current.curColor).toBe('red');

})



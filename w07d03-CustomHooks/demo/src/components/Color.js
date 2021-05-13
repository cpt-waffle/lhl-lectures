import React from 'react'
import useColor from '../hooks/useColor'

const c = ['firebrick', 'lime', 'blanchedalmond', 'red', 'blue']

function Color(props) {
    const {currentColor, next, prev} = useColor(c);

    c.pop();
    c.pop();
    c.pop();
    c.pop();
    c.pop();

    return (
        <div style={{backgroundColor: currentColor}}>
            Color Changer
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Color;
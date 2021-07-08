import React from 'react';
import useColor from '../hooks/useColor';

const Color = (props) => {
    const {defaultColor, next, prev} = useColor(['red', 'green', 'yellow', 'blue', 'salmon', 'firebrick']);

    return (
        <div style={{backgroundColor: defaultColor}}>
            <h3>Color Changer!</h3>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Color;
import React from 'react';
import useColor from '../hooks/useColor';

const colors = ['lime', 'firebrick', 'salmon', 'purple', 'green', 'red', 'black', 'pink'];

const Color = function(props) { 
    const {defaultColor, prev, next} = useColor(colors);
    return (<div style={{backgroundColor: defaultColor}}>
        Color changer
        <br/>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
    </div>)
}

export default Color;
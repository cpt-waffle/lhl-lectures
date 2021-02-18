import React from 'react';
import useColor from '../hooks/useColor';

function Color(props) {
    const {currentColor, next, back} = useColor(['salmon', 'firebrick', 'rebeccapurple', 'lime', 'blue', 'red']);
    console.log(currentColor);

    return (<div style={{backgroundColor: currentColor}}>
        <h1>Hello World!!</h1>
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
    </div>)
}

export default Color;
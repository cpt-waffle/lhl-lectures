import React from 'react';
import useColor from '../hooks/useColor';


const Color = function(props) {
    const colors = ['green', 'cyan', 'lime', 'firebrick', 'salmon', 'blue', 'red', 'orange', 'pink'];
    const {currentColor, next, previous} = useColor(colors);
    return (
        <div style={{backgroundColor: currentColor}}>
            Color Changer!
            <br/>
            <button onClick={next}>Next</button>
            <button onClick={previous}>Previous</button>
        </div>
    )
}



export default Color;
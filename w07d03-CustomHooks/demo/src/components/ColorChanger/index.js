import React from 'react';
import './index.css';
import useColor from '../../hooks/useColor';

function ColorChanger(props) {
    const { currentColor, nextColor, prevColor } = useColor(props.currentColor, props.colorArr);

    return (
        <div style={{backgroundColor: currentColor}}className="colorChanger">
            Hello World!
            <button onClick={nextColor}>Switch Color</button>
            <button onClick={prevColor}>Back Color</button>
        </div>
    )

}


export default ColorChanger;
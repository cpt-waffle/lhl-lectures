import React from 'react';
import useColor from '../hooks/useColor';


const ColorChanger = (props) => {
    // const color = useColor(['firebrick', 'lime', 'green', 'blue']);
    const {curColor, next, back} = useColor(['firebrick', 'lime', 'green', 'blue'])
    return (<div style={{backgroundColor: curColor}}>
        Color Changer
        <button onClick={back}>Prev Color</button>
        <button onClick={next}>Next Color</button>
    </div>)
}


export default ColorChanger;
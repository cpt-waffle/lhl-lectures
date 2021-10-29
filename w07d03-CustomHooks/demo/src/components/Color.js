import React from 'react';
// import your custom hook!
import useColor from '../hooks/useColor';


const Color = (props) => {
    console.log(props.colors)
    const {defaultColor, next, prevColor} = useColor(props.colors);
    return (
        <div style={{backgroundColor: defaultColor}}>
            <h3>Color Component :)</h3>
            <button onClick={prevColor}>Previous Color</button>
            <button onClick={next}>Next Color</button>
        </div>
    )

}


export default Color;
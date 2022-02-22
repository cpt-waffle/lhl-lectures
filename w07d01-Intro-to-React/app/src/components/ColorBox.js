import React from 'react';

const ColorBox = function(props) {

    const color = {
        backgroundColor: props.color
    }
    return (<div style={color}>
        <h2>{props.title}</h2>
    </div>)
}


export default ColorBox;
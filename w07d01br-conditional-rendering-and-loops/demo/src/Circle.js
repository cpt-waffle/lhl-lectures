import React from 'react';
import './Circle.css'

const randomNumber = () => {
    return Math.floor(Math.random() * 8);
}

const colors = {
    0: 'BurlyWood',
    1: 'Coral',
    2: 'DarkSlateBlue',
    3: 'Peru',
    4: 'Salmon',
    5: 'SteelBlue',
    6: 'YellowGreen',
    7: 'RebeccaPurple',
    8: 'PaleVioletRed',
}

const Circle = function(props) {
    const color = colors[randomNumber()];
    return (
        <div className="circle" style={{backgroundColor: color}}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Circle;
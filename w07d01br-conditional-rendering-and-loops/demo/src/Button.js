// step 1 import react from react ()
import React from 'react';
import classnames from 'classnames';

import './Button.css'

// step 2 create a function, WITH the convention (same as the fileName and capitalized)
const Button = function(props) {
    console.log('---------------------->', props);
    // let classes = 'button';
    // if (props.type) {
    //     classes += ` ${props.type}`;
    // }
    // if (props.textColor) {
    //     classes += ` ${props.textColor}`;
    // }
    const classes = classnames('button', { 
        "primary":  props.type === 'primary',
        "secondary": props.type === 'secondary',
        "white": props.textColor === 'white',
        "green": props.textColor === 'green'
    })


    console.log(classes);

    //Step 4 (this will give you an error if you dont do it)
    // you need to return some JSX to be rendered on screen!
    return (
        <button className={classes}>
            Click me!!
        </button>
    )
}

// step 3: export default

export default Button;
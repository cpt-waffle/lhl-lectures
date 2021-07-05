// import React from 'react'
// const React = require('react');
import React, {useState} from 'react';
// STATE!!
// is a "special" variable that WHEN the value changes, react will re-render the component
// with that new change 

//make the function 

const Clicker = function() {
    const [num, setNum] = useState(1);
    
    //                      [value, f(set that value)]
    // setNum(val) => {
        // num = val'
        // NotifyReactToRerender();
    // }        
    // useState makes a variable (first variable in the destructed array)
    // and it sets that variable to whatever useState() param was passed
    // second variable ( from the destructed) is a function that you use
    // TO RE-SET THE VALUE OF NUM VARIABLE (NO OTHER WAY WAY OF DOING IT)

    // make sure it returns JSX/HTML
    const clickAdd = () => {
        console.log("Add One")
        setNum(num + 1);
    }

    const clickSubtract = () => {
        console.log("Minus One");
        setNum(num - 1);
    }

// $(() => {
    // $('#btn1').on('click', clickMe)
// })

    return (
        <div>
            <h1>Number: {num}</h1>
            <button onClick={clickAdd}>Add 1</button>
            <button onClick={clickSubtract}>Subtract 1</button>
        </div>
    )
}

// export default

export default Clicker;
// step 1: always import React from 'react'
import React from 'react';


// Step 2: make a function, that is your component.

function Row(props) {
    // Step 4: must have a return
    return (
        <div>
            <h3>{props.valOne} x {props.valTwo} = {props.valOne* props.valTwo} </h3>
        </div>
    )
}



// Step 3: export Default your component;
export default Row;
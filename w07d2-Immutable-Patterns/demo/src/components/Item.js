// Optional for new react ver, but folder ones required import 
import React from 'react';


// make a function same name as Component

const Item = (props) => {
    console.log(props)
    // add return and make sure it returns HTML/JSX
    return (
        <li>{props.name}</li>
    )
}


// export default the function/Component
export default Item;
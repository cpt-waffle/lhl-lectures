import React from 'react'; // NEEDED!

const CartItem = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.num} ----- {props.name} <button onClick={ props.banana }>On Click</button></h1>
        </div>
    )
}

// MUST EXPORT
export default CartItem;
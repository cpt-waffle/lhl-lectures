import React from 'react'
import './item.css';

const Item = (props) => {
    return (
        <li className='item'>
            {props.task}
        </li>
    )
}


export default Item;
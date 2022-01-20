//
import React from 'react';
import './productlistitem.css';

export default function ProductListItem(props) {
    console.log("props", props);
    return (<div className="item">
        <img className="item--img" src={props.img}/>
        <div className='item--desc-container'>
            <div className='left'>
                <h3>{props.name}</h3>
                <h3>{props.price}</h3>
            </div>
            <div>
                <button>Buy Now</button>
            </div>
        </div>
    </div>)
}
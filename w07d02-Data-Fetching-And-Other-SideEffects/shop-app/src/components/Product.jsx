import React from 'react'


function Product(props) {
    return <div className="product">
        <div className="product--container">
            <h5>{props.data.name}</h5>
            <img className="product--img" src={props.data.img}/>
            <p>{props.data.price}</p>
            <button onClick={() => props.onClick(props.data.id)}>Buy Now</button>
        </div>
    </div>
}


export default Product;
import React from 'react';
import './meme.css';

const Meme = (props) => {

    return (
        <div className="meme">
            <img className="meme--img" src={props.imgURL}/>
            <h3 className="meme--title">{props.name}</h3>
        </div>
    )
}

export default Meme;
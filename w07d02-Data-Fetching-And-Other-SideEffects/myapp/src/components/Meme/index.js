import React from 'react';
import './index.css'


function Meme(props) {
    console.log("MEME CONSOLE Line 6")
    return (
    <div className="meme">
        <h2>{props.name}</h2>
        <img src={props.url}/>
    </div>)
}

export default Meme;
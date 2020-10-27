import React from 'react';
import './memes.css'

function Meme(props) {
    return (
        <div>
            <h2>{props.name ? props.name : 'Default meme'}</h2>
            {props.url && <img className='meme-img' alt="meme" src={props.url} />}
        </div> 
    )
}

export default Meme;
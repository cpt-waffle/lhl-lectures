import React from 'react';
import './index.css';

//                     {}
const MemeContainer = props => {

  return (
    <div className='meme'>
      <img className='meme--img' src={props.url}/>
      <h2>{props.name.toUpperCase()}</h2>
    </div>
  )
}

export default MemeContainer;
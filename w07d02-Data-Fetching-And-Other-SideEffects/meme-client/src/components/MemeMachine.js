import React from 'react';
import './MemeMachine.css';


const MemeMachine = (props) => {
  return (
    <article className='meme'>
      <h2>{props.title}</h2>
      <img
        className='meme--img'
        src={props.img}
      /> 
    </article>
  )
}


export default MemeMachine;
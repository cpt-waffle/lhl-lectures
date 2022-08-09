import React from 'react';
import './Card.css';
import Navbar from './Navbar';
import Status from './Status';
//           properties
// its an object that contains,
// EVERY SINGLE key/val pair passed in


// Turniary 
// STATEMENT ? _IF_TRUE_ : _IF_FALSE_
// ||

const Card = (props) => {
  console.log(props);
  const defaultImg = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
  return (
    <article className='card'>
      <img 
        className='card--img'
        src={props.img ? props.img : defaultImg}/>
      <h1>{props.name || 'default name'}</h1>
      <h2>{props.title}</h2>
      <div className="card--desc">
        {props.children}
      </div>
      <h1>Num {props.num}</h1>
      <Status/>
    </article>
  )
}

export default Card;

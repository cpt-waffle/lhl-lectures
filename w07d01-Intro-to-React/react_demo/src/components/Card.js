import React from 'react';
import './Card.css';

// props = { image, name, title} 
const Card = (props) => {
  const defaultImg = 'https://i.redd.it/7k24xova0ya11.jpg';
  return (<article className="card">
    <img className="card--img" src={props.image ? props.image : defaultImg}/>
    <h1 className="card--name">{props.name ? props.name : 'No Name'}</h1>
    <h3 className="card--title">{props.title ? props.title : 'No Title'}</h3>
    <button id="likes-btn">Like</button><h4 id="likes-count">3</h4>
  </article>)
}

export default Card;
import React from 'react';
import Avatar from './Avatar';
import './Card.css'

const Card = (props) => {
  console.log(props);
  return (
    <div className='card'>
      <Avatar image={props.image}/>
      <h1>{props.name || 'Mr Woofs'}</h1>
      <h3>{props.title || 'Senior Tester'}</h3>
    </div>
  )

}

export default Card;

// app.get('/', (req, res) => {
    //pg.query()
//})
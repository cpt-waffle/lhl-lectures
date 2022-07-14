import React from 'react';
import './index.css';
import Image from './Image';

const Poster = props => {
  return (
    <div className='poster'>
      <Image imgURL={props.imgURL}/>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Poster;
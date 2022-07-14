import React from 'react';
import './Image.css';

const Image = props => {
  return (
    <img
    className='poster--img' 
    src={props.imgURL}/>
  )
}


export default Image;
import React from 'react';
import './index.css';
import HeadLine from './HeadLine';

/// props --> ??
// Docs: props = {title, img}
const MemeCard = (props) => {
  console.log(props);
  return (
    <div className='meme-card'>
      <img
        className='meme-card--img' 
        src={props.img}
      />
      <HeadLine title={props.title}/>
    </div>
  )
}

export default MemeCard;
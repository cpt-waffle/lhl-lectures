import React from 'react';
import './Meme.css'

// scss
// <link css
// your browser can only read 3 types of files
// HTML CSS and JS

const Meme = (props) => {
  return (
    <div className='meme'>
      <img className='meme--img' src={props.data.url}/>
      <h3>{props.data.name}</h3>

    </div>
  )
}

export default Meme;
import React from 'react';
import './Meme.css';

// props.img,  props.title
const Meme = (props) => {
  const img = props.img ? props.img : 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';

  return (<div className="meme">
    <img src={img}/>
    <h2>{props.title ? props.title : 'Default Title :)'}</h2>
    <button onClick={() =>props.func(12)}>Click Me</button>
  </div>)
}


export default Meme;

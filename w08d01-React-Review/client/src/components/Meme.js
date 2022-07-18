// if older ver of react..
// import React from 'react';
import React from 'react';
import "./Meme.css";

// make a function that is the SAME NAME
// as the component
// props.title
// props.img
const Meme = props => {

// make sure the component RETURNS
// JSX
  return (
    <div className="meme">
      <img src={props.img}/>
      <h1>{props.title}</h1>
    </div>
  )

}

// export defaults
export default Meme;
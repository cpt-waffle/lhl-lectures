import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  // $(document).on('ready', () => {
      // $('#id').on('click', () => {

      // })
  // })
  // adding an event listener
  let number = 2;
  // STATE
  // just a variable ("SPECIAL KIND OF VARIABLE")
  // useState returns an ARRAY 
  // 2 elements within that array
  // 1st element the variable
  // 2nd element is the function to CHANGE THAT variable
  const [num, setNum] = useState(56);
  // num = 56
  // setNum(val)
  // num = val; 
  // heyReactPleaseReRenderThisComponent();

  const onButtonClick = () => {
    setNum(num + 1); 
    console.log("CLICKED!!");
  }


  return (
    <div className="card">
      <img className="card--img" src={props.imgURL}/>
      <h1>{props.name}</h1>
      <h3>{props.title}</h3>
      {props.children}
      <button onClick={onButtonClick} >Likes {num}</button>
    </div>
  )
}

export default Card;
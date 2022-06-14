import React, { useState } from 'react';
import "./Profile.css"

const Profile = (props) => {
  // let name = 'Mr Meows';
  // let title = 'Lead Team Designer';
  // let likesCount = '4';

  // in JS/JQUERY land
  // find the elemnt with $() or getElementById or class or 
  // now use {} brackets

  // how to add an event listener?
  // JQUERY/VanillaJS
  // $('#likes-btn').on('click', () => {
       //....  
 // })

  // to add an event listener to a button in react...
  // make a function
  
  //// STATE
  // destruction of an object or an array
  const [num, setNum] = useState(3);
  // const num = aaa[0]
  // const setNUm = aaa[1];

  // first param is always the value of state
  // second param is always the function


  const onButtonLikeClick = () => {
    console.log("pressed!");
    setNum(num + 1);
    // setNum = (arg) => num = arg; AND ALSO, TELL REACT TO RE-render the component
  }

  return (
  <div className="card">
    <img className="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
    <h1 className="card--name">{props.name}</h1>
    <h3 className="card--title">{props.title}</h3>
    <button onClick={onButtonLikeClick} id="likes-btn">Like</button><h4 id="likes-count">{num}</h4>
  </div>
  );
}


export default Profile;
import React, { useState } from 'react';
import './Profile.css';


const Profile = (props) => {
  const [num, setNum] = useState(124);
  const [title, setTitle] = useState('hello world');

  let number = 99;
  // const setNum = val => {
  //  num = val;
  //  makeThisComponentReRender();
  // when you run a setState function, you must pass
  // a new value (not reference pass the state itself!)
  // }

  const clicked = () => {
    console.log("clicked the button!");
    number++;
    setNum(num+1);
  }


  return (<div>
    <div className="card">
        <img className="card--img" src={props.picture}/>
        <h1 className="card--name">{props.name}</h1>
        <h3 className="card--title">{props.position}</h3>
        <button onClick={clicked}>Like</button><h4>{num}</h4>
    </div>
  </div>)
}

export default Profile;

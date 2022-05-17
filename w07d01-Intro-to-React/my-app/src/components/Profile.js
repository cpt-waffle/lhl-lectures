import React, {useState } from 'react';
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="card">
        <img className="card--img" src={props.img}/>
        <h1 className="card--name">{props.name}</h1>
        <h3 className="card--title">{props.title}</h3>
        <button id="likes-btn">Like</button><h4 id="likes-count">3</h4>
    </div>
  )
}

export default Profile;

const Hello = () => <h1>Hello</h1>;
export { Hello };
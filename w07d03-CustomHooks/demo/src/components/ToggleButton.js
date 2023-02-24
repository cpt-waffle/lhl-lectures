import React from 'react';
import { useState } from 'react';
import useToggle from '../hooks/useToggle';


const ToggleButton = (props) => {
  
  const {toggle, onClick} = useToggle(); // returns us toggle, onClick
  // useToggle() => {toggle: toggleState(), onClick: f()}
  // const hook = useToggle();
  // const toggle = hook.toggle;

  return (
    <div>
      <button onClick={onClick}>ON/OFF</button>
      {toggle ? <h1>The Light is ON</h1> : <h1>The Light is OFF</h1>}
    </div>
  );
}


export default ToggleButton;
import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';

const Button = props => {
  const {toggle, onSwitch} = useToggle();

  return (<div>
    <button onClick={onSwitch}>ON/OFF</button>
    <h1>{toggle ? 'ON' : 'OFF'}</h1>
  </div>)
}

export default Button;
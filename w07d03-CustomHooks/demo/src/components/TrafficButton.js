import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';
import Button from './Button';

const TrafficButton = props => {
  // object destruction
  const {toggle, onSwitch} = useToggle();


  return (<div>
    <button onClick={onSwitch}>ON/OFF</button>
    <h1>{toggle ? "DON'T WALK" : 'WALK'}</h1>
    <Button/>
  </div>)
}

export default TrafficButton;
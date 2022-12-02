import React, {useState} from 'react';
import useButton from '../hooks/useButton';


const Button = () => {
  const {toggle, onSwitch} = useButton();
  return (
    <div>
      <button onClick={onSwitch}>Toggle</button>
      <h3>{toggle ? 'ON' : 'OFF'}</h3>
    </div>
  )
}


export default Button;
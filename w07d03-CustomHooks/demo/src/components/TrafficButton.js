import React, {useState} from 'react';
import useButton from '../hooks/useButton';


const TrafficButton = () => {
  const btn = useButton();
  
  return (
    <div>
      <button onClick={btn.onSwitch}>Toggle</button>
      <h3>{btn.toggle ? 'WALK' : 'DONT WALK'}</h3>
    </div>
  )
}


export default TrafficButton;
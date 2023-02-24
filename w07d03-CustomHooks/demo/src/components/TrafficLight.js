import React, {useState} from 'react';
import useToggle from '../hooks/useToggle';

// What if i told you, you can move
// -- state
// -- functions that change state
// into its own file....
// and re-use that file multiple times in other components

// Custom Hooks -- re-use of state logic

const TrafficLight = (props) => {
  const {toggle, onClick} = useToggle();

  return (
    <div>
      <button onClick={onClick}>WALK/DON'T WALK</button>
      {toggle ? <h1>WALK</h1> : <h1>DON'T WALK</h1>}
    </div>
  );
}

export default TrafficLight;
import React from 'react';
import './TrafficLight.css';
// import your custom hook!
import useToggle from '../hooks/useToggle';


const TrafficLight = () => {
const tl1 = useToggle(false); // brand new instance
const tl2 = useToggle(false);// brand new instance
const tl3 = useToggle(false); // brand new instance


  // {toggle: true/false, onToggle: f()}

  return (
    <div>
      Traffic Light!
      {tl1.toggle ? 
        <div className='green'>Walk</div> : 
        <div className='red'>Don't Walk</div> 
      }
      <button onClick={tl1.onToggle}>Click</button>
      Traffic Light!
      {tl2.toggle ? 
        <div className='green'>Walk</div> : 
        <div className='red'>Don't Walk</div> 
      }
      <button onClick={tl2.onToggle}>Click</button>
      Traffic Light!
      {tl3.toggle ? 
        <div className='green'>Walk</div> : 
        <div className='red'>Don't Walk</div> 
      }
      <button onClick={tl3.onToggle}>Click</button>
    </div>
  )
}

export default TrafficLight;


// -- Application/App.js

// state, useState = {appointements, interviewers, days}

//  setDay
//  setDays
// 
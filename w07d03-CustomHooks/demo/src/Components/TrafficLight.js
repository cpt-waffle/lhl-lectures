import { useState } from 'react';
import useToggle from '../hooks/useToggle';


const TrafficLight = () => {
  const whatIsThis = useToggle(false);
  console.log(whatIsThis);

  return (
    <div>
      <h1>Traffic Light</h1>
      {
        whatIsThis.toggle ? <div className='walk'>Walk</div> : <div className='stop'>Dont Walk</div>
      }
      <button onClick={whatIsThis.onToggleClick}>Change</button>
    </div>
  )
}

export default TrafficLight;
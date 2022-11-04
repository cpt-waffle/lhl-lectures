import React from 'react';
import useButton from '../hooks/useButton';


const Button = () => {
  // useButon() --> an object {light, click}
  const btn = useButton();

  return (
    <div>
      <button onClick={btn.click}>Toggle On/off</button>
      {btn.light ? 'ON' : 'OFF'}
    </div>
  )
}

export default Button;
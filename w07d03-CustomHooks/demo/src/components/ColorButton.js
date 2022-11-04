import React from 'react';
import useButton from '../hooks/useButton';


const ColorButton = () => {
  const {light: color, click} = useButton();

  return (
    <div>
      <button onClick={click}>Toggle On/off</button>
      {color ? 'Red' : 'Green'}
    </div>
  )
}

export default ColorButton;


// What if, you could RE-USE logic of state, useEffect, anything else
// of a component????

// custom hooks
// -- refactor state logic, and component to a differnt file
// -- re-use that logic, in another component (Without copy/pasting same code!)
// -- IF Component logic becomes VERY heavy, maybe time to move it to another file...

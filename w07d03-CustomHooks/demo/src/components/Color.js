import React, { useState } from 'react';
import useColor from '../hooks/useColor';


const Color = (props) => {
  const array = ['cornflowerblue', 'firebrick', 'lime', 'rebeccapurple', 'goldenrod'];
  const {currentColor, next, prev} = useColor(array);
  console.log(currentColor);
  return (
    <div style={{backgroundColor: currentColor}}>
      The color Component
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>

    </div>
  );
}

export default Color;



// Building a Hook

// useVisualMode

// FIRST 
// transition
// SECOND
// transition
// FIRST
///////////////////// EMPTY, SHOW, FORM, etc

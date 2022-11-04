import React from 'react';
import useColor from '../hooks/useColor';


const Color = () => {
  const {currColor, next, prev} = useColor(['skyblue', 'goldenrod', 'firebrick', 'rebeccapurple'])

  return (
    <div style={{backgroundColor: currColor}}>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}


export default Color;

// ['red', 'green', 'blue']

//   a variable that starts with red
//   changes when something has been clicked
//   method to go to next and prev
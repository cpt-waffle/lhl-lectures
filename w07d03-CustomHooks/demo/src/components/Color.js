import React from 'react';
import useColor from '../hooks/useColor';


const Color = () => {
  const colorArray = ['firebrick', 'rebeccapurple', 'cornflowerblue', 'lime'];
  const {currentColor, next, back} = useColor(colorArray)

  return (
    <div style={{backgroundColor: currentColor}}>
      <br/>
      <button onClick={back}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default Color;
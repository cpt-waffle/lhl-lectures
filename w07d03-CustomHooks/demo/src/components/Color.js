import React from 'react';
import useColor from '../hooks/useColor';


const Color = (props) => {
  const {currentColor, next, prev} = useColor(['rebeccapurple', 'goldenrod', 'firebrick', 'blue', 'salmon', 'skyblue', 'green']);
  return (
    <div style={{backgroundColor: currentColor}}>
      Color Component!
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  )
}


export default Color;
import React from 'react';
import useColor from '../hooks/useColor';



const Color = props => {
  const {currColor, next, prev} = useColor(['firebrick', 'rebeccapurple', 'cornflowerblue', 'lime', 'pink', 'floralwhite']);

  return (
    <div style={{backgroundColor: currColor}}>
      <br/>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  )
}


export default Color;
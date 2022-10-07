import React from 'react';
import './Color.css';
import useColor from '../hooks/useColor';

const Color = (props) => {
  // i want to pass an array of colors into use color
  // it returns me an object, with current color selected
  // [red, blue, green, purple]
  // red
  const color = useColor(['goldenrod', 'rebeccapurple', 'limegreen', 'firebrick'])

  return (<div style={{backgroundColor: color.currentColor}} className='color'>
    Color Box
    <button onClick={color.prev}>Prev</button>
    <button onClick={color.next}>Next</button>

  </div>)
}

export default Color;
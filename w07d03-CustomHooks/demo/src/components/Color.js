import React from "react";
import useColor from "../hooks/useColor";
// a component that we give an array of colors
// red green blue purple
// with 2 buttons that can go through the colors


const Color = () => {
  const colors = ['goldenrod', 'firebrick', 'lime', 'gray', 'green', 'yellow', 'lightblue']
  const {currColor, next, prev} = useColor(colors);

  return (
    <div style={{backgroundColor: currColor}}>
      Color!
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Color;
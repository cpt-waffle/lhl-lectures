import { useState } from "react";


const useColor = (colorsArray) => {
  // use color takes an array of colors
  // ['red, 'green', 'blue']
  const [index, setIndex] = useState(0);
        //                         0

  const next = () => {
    setIndex(prev => {
      return prev + 1;
    })
  }

  const prev = () => {
    setIndex(prev => {
      return prev - 1;
    })
  }

  return {currentColor: colorsArray[index], next, prev};
}

// use color has a currentSelectedColor 
// use color can go to the next color and change the currentSelected color [blue -> green]
// use color can go to the previous color and change the currentSelectedColor [blue <- green]


export default useColor;
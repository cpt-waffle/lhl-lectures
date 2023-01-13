import { useState } from "react";


const useColor = array => {
  const colors = [...array];
  const [currentColor, setCurrentColor] = useState(0);

  const next = () => {
    if (colors.length-1 > currentColor)
      setCurrentColor(prev => prev + 1);
  }

  const prev = () => {
    if (currentColor > 0)
      setCurrentColor(prev => prev - 1);
  }

  // current color 
  return {currColor: colors[currentColor], next, prev};
}


export default useColor;


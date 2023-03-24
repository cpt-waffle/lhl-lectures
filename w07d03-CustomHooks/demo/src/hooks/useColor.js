import { useState } from "react";

const useColor = (array) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < array.length -1)
    setIndex(prev => prev + 1);
  }

  const back = () => {
    if (index > 0)
      setIndex(prev => prev - 1);

  }

  return {currentColor: array[index], next, back}
}

export default useColor;
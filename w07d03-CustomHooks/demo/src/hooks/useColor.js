import { useState } from "react";

const useColor = (arr) => {
  const [ index, setIndex] = useState(0);

  const next = () => {
    if (arr.length - 1 > index) 
    setIndex(prev => prev + 1);
  }

  const prev = () => {
    if ( 0 < index)
      setIndex(prev => prev - 1);
  }


  return {currColor: arr[index], next, prev}
}


export default useColor;
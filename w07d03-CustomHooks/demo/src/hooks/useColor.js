import { useState } from "react";

const useColor = (array) => {
  const [index, setIndex] = useState(0);

  console.log("AM I RUNNING!?");
  console.log(array);

  const next = () => {
    setIndex(prev => prev + 1);
  }

  const prev = () => {
    setIndex(prev => prev - 1);
  }

  return {currentColor: array[index], next, prev}
}

export default useColor;
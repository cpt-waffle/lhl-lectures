import { useState } from "react";

const useColor = (colorsArr) => {
  const colors = [...colorsArr];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(prev => prev + 1);
  }

  const prev = () => {
    setIndex(prev => prev - 1);
  }

  return {currColor: colors[index], next, prev}
}

export default useColor;
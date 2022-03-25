import { useState } from "react";

const useColor = (colors) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index !== colors.length - 1 ) setIndex(index + 1);
  }

  const prev = () => {
    if (index !== 0) setIndex(index - 1);
  }

  return {currentColor: colors[index], next, prev}
}

export default useColor;

import { useState} from 'react';

const useColor = colors => {
  const [index, setIndex] = useState(0);

  const colorsArray = colors; 

  const incrementIndex = () => {
    setIndex(prev => (prev + 1) % (colorsArray.length));
  }

  const decrementIndex = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  }


  return { colorsArray, selectedColor: colors[index], incrementIndex, decrementIndex};
}

export default useColor;
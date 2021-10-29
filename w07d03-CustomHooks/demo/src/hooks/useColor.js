// import the things we need
import {useState} from 'react';

// make a file with use____ prefix
// make a function called the same name as file (convention)
// export that function out

// TESTING!!!!
const useColor = (arrOfColors) => {
    const [colorIndex, setColorIndex] = useState(0);
    const defaultColor = arrOfColors[colorIndex];

    const next = () => {
        if (arrOfColors.length -1 > colorIndex) {
            setColorIndex(prev => prev + 1);
        }
    }

    const prevColor = () => {
        if (colorIndex > 0) {
            setColorIndex(prev => prev - 1);
        }
    }

    return {defaultColor, next, prevColor}
}


export default useColor;
import {useState} from 'react';

function useColor(val, colorsArr) {
    const [currentColor, setCurrentColor] = useState(val ? val : 'firebrick');
    const allColours = [val, ...colorsArr];
    const [index, setIndex] = useState(0);
    console.log(currentColor)

    const nextColor = (color) => {
        let newIndex = index + 1;
        if (newIndex < allColours.length) {
            setCurrentColor(allColours[newIndex])
            setIndex(newIndex);
        }
    }

    const prevColor = () => {
        let newIndex = index -1;
        if (newIndex >= 0) {
            setCurrentColor(allColours[newIndex])
            setIndex(newIndex);
        }
    }


    return { currentColor, nextColor, prevColor };
}



export default useColor;
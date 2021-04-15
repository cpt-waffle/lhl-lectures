import { useState } from 'react';


const useColor = (colors) => {
    const [curColor, setCurColor] = useState(colors[0]);
    const historyColors = [...colors];
    const [index, setIndex] = useState(0);


    const next = () => {
        const newIndex = index + 1; 
        setCurColor(historyColors[newIndex]);
        setIndex(newIndex);
    }

    const back = () => {
        const newIndex = index - 1; 
        setCurColor(historyColors[newIndex]);
        setIndex(newIndex);
    }


    return {curColor, next, back}
}


export default useColor;
import { useState } from 'react'
// Make a component that has 2 buttons
// when click the next button it will change the color the next color in the list
// clicking prev will go back a color in the list

function useColor(colorArr) {
    const [currentColor, setCurrentColor] = useState(colorArr[0]);
    const [colors, setColors] = useState(colorArr);
    const [index, setIndex] = useState(0);
    console.log(index);
    const next = () => {
        const newIndex = index + 1;
        setCurrentColor(colors[newIndex]);
        setIndex(newIndex);
    }

    const back = () => {
        const newIndex = index - 1;
        setCurrentColor(colors[newIndex]);
        setIndex(newIndex);

    }

    return {currentColor, next, back};
}



export default useColor;
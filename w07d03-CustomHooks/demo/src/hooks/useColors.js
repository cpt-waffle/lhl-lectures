import {useState} from 'react';

// to make custom hooks tests, we are going JEST ( which you already been using )
// AND @testing-library/react-hooks

// to make tests
// we are going make a __tests__ folder in our hooks folder
// make a file called use____.test.js

function useColors(c) {
    const [state, setState] = useState({currentColor: c[0], allColors: c, currentIndex: 0})

    const next = () => {
        setState(prev => {
            const {currentColor, currentIndex, allColors} = prev;
            const newCurrentColor = allColors[currentIndex + 1];
            const newCurrentIndex = currentIndex + 1;
            return {...prev, currentColor: newCurrentColor, currentIndex: newCurrentIndex};
        })
    }

    const back = () => {
        setState(prev => {
            const {currentColor, currentIndex, allColors} = prev;
            const newCurrentColor = allColors[currentIndex - 1];
            const newCurrentIndex = currentIndex - 1;
            return {...prev, currentColor: newCurrentColor, currentIndex: newCurrentIndex};
        })
    }

    return {state, next, back};
}


export default useColors;
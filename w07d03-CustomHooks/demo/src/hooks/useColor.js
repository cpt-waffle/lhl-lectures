import { useState } from 'react';

const useColor = function(arr) {

    let colors = [...arr];
    const [index, setIndex] = useState(0);
    
    const next = () => {
        setIndex(index + 1);
    }

    const prev = () => {
        setIndex(index - 1);
    }
    
    let defaultColor = arr[index]

    return {defaultColor, next, prev};
}


export default useColor;
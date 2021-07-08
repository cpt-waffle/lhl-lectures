// custom hooks will have state, useEffect ( etc etc, things from react )
import {useState} from 'react';

const useColor = (defaultParams) => {
    const [index, setIndex] = useState(0);
    console.log('default params', defaultParams);

    const next = () => {
        if (defaultParams.length - 1 > index)
            setIndex(index + 1);
    }

    const prev = () => {
        if (0 !== index)
            setIndex(index - 1);
    }

    return {defaultColor: defaultParams[index], next, prev}
}


export default useColor;
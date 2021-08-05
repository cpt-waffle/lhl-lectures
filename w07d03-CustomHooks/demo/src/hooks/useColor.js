import {useState} from 'react'

const useColor = function(params) {
    const [index, setIndex] = useState(0);
    
    const next = () => {
        setIndex(prev => prev + 1)
    }

    const prev = () => {
        setIndex(prev => prev - 1)
    }

    return {defaultColor: params[index], next, prev}
}



export default useColor;
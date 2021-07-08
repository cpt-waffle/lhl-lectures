import {useState} from 'react';
// steps in making a custom hook
// 1 - make a file with PREFIX "use_____.js"

// 2 - Make a function called use____ (kind of like your making a component)
const useForm = function(defaultVal) {
    // 4 - ADD all of THE LOGIC from the component ( such as state ) into this file

    const [val, setVal] = useState(defaultVal || '');

    const handleVal = (evt) => {
        setVal(evt.target.value);
    }
    // this function returns ALL OF THE LOGIC that a component needs...
    return {val, handleVal};
}

export default useForm;

// 3 - export default useForm


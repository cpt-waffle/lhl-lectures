// make a hooks folder
// make a file with a prefix 'use____'.jsx
// make a function called 'use___'
import {useState, useEffect} from 'react';


function useForm() {
    // make your logic for state here....
    const [val, setVal] = useState('');

    const onChangeVal = (evt) => {
        setVal(evt.target.value);
    }

    // DO NOT RETURN JSX 
    // return the functions and variables you will need to use in the component..
    return {val, onChangeVal}
}


// export the function as you would do..
export default useForm;
// 1 ) make a file with the prefix "use" (useForm.js)
// 2 )  import ONLY THE HOOKS YOU NEED !!!!
// 3 ) create your function 
// 4 ) export your function
import { useState, useEffect } from 'react';


function useForm() {
    const [val, setVal] = useState('');
    
    const onChangeVal = (evt) => {
        setVal(evt.target.value);
    }

    return {val, onChangeVal};
}

export default useForm;
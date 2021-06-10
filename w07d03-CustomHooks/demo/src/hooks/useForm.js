// 1) make a file WITH PREFIX "use" (useForm.js)
// 2) import the hooks used in the logic <----
// 3) make a function
// 4) export default your function
import { useState, useEffect } from 'react';

// the custom hook function 
// WILL NOT RETURN JSX ----------------
// it WILL NOT import React from "react"
const useForm = function(arg) {

    useEffect(() => {
        console.log("hello");
    })


    const [val, setVal] = useState(arg || '');

    const onValChange = (evt) => {
        setVal(evt.target.value);
    }

    const clear = () => {
        setVal('');
    }

    return {val, onValChange, clear};
}


export default useForm;
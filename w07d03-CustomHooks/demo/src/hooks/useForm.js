// we are NOT importing REACT 
// we may import useState, useEffect, etc
import { useState } from 'react';

// this function will not be RENDERING anything on the screen
// this is NOT a component!!!
function useForm() {
    const [val, setVal] = useState('');

    const handleVal =(newVal) => {
        
        setVal(newVal);
    }

    const cleanup = (e) => {
        e.preventDefault();
        setVal('');
    }
    
    return {val, handleVal, cleanup};
}



export default useForm;
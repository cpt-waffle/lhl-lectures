//
import { useState, useEffect } from 'react';



function useForm() {

    const [val, setVal] = useState('');
    const [name, setName] = useState('')
    

    useEffect(() => {
        // axios here....
        console.log("HEllo world");
    })

    const handleValChange = (evt) => setVal(evt.target.value);



    return {val, handleValChange};
}

// kind of what we did in making components
// BUT alittle different....
export default useForm;
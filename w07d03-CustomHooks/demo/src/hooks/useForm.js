import { useState, useEffect } from 'react';
// import only the things you need in a hook, ( if you do not need React to be rendered dont import react)



function useForm(val) {

    const [value, setValue] = useState(val || '');

    const handleVal = (val) => {
        setValue(val);
    }

    const clear = (evt) => {
        evt.preventDefault();
        setValue('');
    }

    return {value, handleVal, clear}
}


export default useForm;
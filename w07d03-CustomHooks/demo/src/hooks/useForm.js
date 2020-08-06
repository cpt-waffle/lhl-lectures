import { useState } from 'react';


function useForm() {
    const [value, setValue] = useState('');

    const onValueChange = (evt) => {
        setValue(evt.target.value);
    }

    const clear = () => {
        setValue('');
    }


    return {value, onValueChange, clear};
}

export default useForm;
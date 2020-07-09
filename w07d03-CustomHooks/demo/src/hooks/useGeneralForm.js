import { useState } from 'react';

function useGeneralForm() {
    //const [firstName, setFirstName] = useState('');
    const [ value, setValue ] = useState('');
    
    const onChange = (evt) => {
        setValue(evt.target.value)
    }

    const clear = () => {
        setValue('');
    }

    // const firstNameOnChange = (evt) => {
    //     setFirstName(evt.target.value);
    // }

    // const firstNameClear = () => {
    //     setFirstName('')
    // }

    return { value, clear, onChange};
}


export default useGeneralForm;
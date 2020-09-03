// 1) name your file to be called "use_____.js (convention)"
import { useState } from 'react';


// 2) Make a function (prob the same name as your file)

function useForm() {
    const [value, setValue] = useState('');

    const handleSetValue = (evt) => {
        setValue(evt.target.value);
    }    

    // function returns everything YOU NEED in your component.
    return { value, handleSetValue }
}
// 3) export default that function

export default useForm;
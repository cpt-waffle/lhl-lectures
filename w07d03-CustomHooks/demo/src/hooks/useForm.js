// Hooks always get called with the word "use"

// We need import NOT REACT but the REACT tools/hooks that we are going to use....

import { useState, useEffect } from 'react';

// We make a function ( same as your file name as usual...)

function useForm() {
    const [value, setValue] = useState('');

    const clear = () => {
        setValue('');
    }


    // return ALL of the variables/functions we need from this useForm...
    return { value, setValue, clear };
  
}


// export default ....

export default useForm;
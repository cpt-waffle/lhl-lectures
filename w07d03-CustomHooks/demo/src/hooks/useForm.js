import { useState } from 'react';

// STEP 1 = MAKE a use_____.js file 
// STEP 2 = Start JUST LIKE you start with making a react component....
// BUUUUUUUT no renders

const useForm = (tempName) => {
    console.log("useForm is running.....!")
    const [val, setVal] = useState(tempName ? tempName : '');

    const onChangeVal = evt => {
        setVal(evt.target.value);
    }

    return {val, onChangeVal};
}



export default useForm;

// Step 3 -- import it into the correct components
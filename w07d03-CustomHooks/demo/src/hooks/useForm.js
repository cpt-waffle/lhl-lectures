import {useState} from 'react';

// make a function
const useForm = function() {
    console.log("CREATING.............");
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const onChangeUser = (evt) => {
        setUsername(evt.target.value);
    }

    const onChangePass = (evt) => {
        setPass(evt.target.value);
    }

    // Custom hook returns any state, and/or functions that manipulate that state 
    // (usually the abstracted function to change state)
    return {username, pass, onChangePass, onChangeUser};
}

// export default that function
export default useForm;
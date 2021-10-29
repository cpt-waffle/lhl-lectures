// import everything need from react but not React itself (UseState, useEffect) !!
import {useState, useEffect} from 'react';

//make a function
// useForm();
const useForm = (inputEmail) => {
    const [email, setEmail] = useState(inputEmail || '');
    const [pass, setPass] = useState('');

    useEffect(() => {
        console.log("HELLO WORLD!")
    }, [])


    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    }

    const onChangePass = (evt) => {
        setPass(evt.target.value);
    }

    // this function will RETURN the methods, and/or variables that your component will need!
    return {email, pass, onChangePass, onChangeEmail, setPass}
}


export default useForm;

// you export the function
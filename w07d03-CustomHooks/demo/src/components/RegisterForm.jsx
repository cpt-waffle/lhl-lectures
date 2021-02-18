import React, {useState} from 'react'
import useForm from '../hooks/useForm'
// Copy pasting state from another component is not DRY
// to solve this we can use custom hooks 
function RegisterForm(props) {

    const email = useForm();     // {val, handleValChange}
    const pass = useForm();   // {val, handleValChange}
    const confPass = useForm();   // {val, handleValChange}
    // {val, handleValChange}

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(email.val, pass.val, confPass.val);
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Register Form</h1>
            <p>Email: <input type="email" name="email" onChange={email.handleValChange}/> </p>
            <p>Password: <input type="password" name="password" onChange={pass.handleValChange}/> </p>
            <p>Confirm Pass Password: <input type="password" name="confPass" onChange={confPass.handleValChange}/> </p>

            <p><button>Submit!</button></p>
        </form>
    )

}


export default RegisterForm
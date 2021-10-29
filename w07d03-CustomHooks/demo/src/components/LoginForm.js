//import react
import React, { useState } from 'react';
import useForm from '../hooks/useForm';

const LoginForm = () => {
    const {email, onChangeEmail, pass, onChangePass} = useForm('a@b.ca');


    // $('#input).on("submit", evt => )
    
    return (
        <form>
            <h1>Login Form</h1>
           <p>Email: <input type='email' name='email' value={email} onChange={onChangeEmail}/> </p> 
           <p>Password: <input type='password' name='pass' value={pass} onChange={onChangePass}/> </p> 
        </form>
    )
}

export default LoginForm;
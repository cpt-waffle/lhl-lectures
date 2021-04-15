import React, { useState } from 'react';
import useForm from '../hooks/useForm'

const RegisterForm = (props) => {

    const email = useForm();
    const pass = useForm();

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(email, pass);
    }

    return <form onSubmit={onSubmit}>
        <h1>Login Form</h1>
        <p>Email:<input onChange={email.onChangeVal} type='text' name='email'value={email.val}/></p>
        <p>Password:<input onChange={pass.onChangeVal} type='password' name='pass' value={pass.val}/></p>
        <p><button>Submit </button></p>
    </form>
}


export default RegisterForm;
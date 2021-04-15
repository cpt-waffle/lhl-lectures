import React, { useState } from 'react';
import useForm from '../hooks/useForm'

const RegisterForm = (props) => {
    const name = useForm('vas');
    const email = useForm();
    const pass = useForm();
    const passConf = useForm('test');

    console.log(name, email, pass);

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(name, email, pass, passConf);
    }

    return <form onSubmit={onSubmit}>
        <h1>Register Form</h1>
        <p>Name:<input onChange={name.onChangeVal} type='text' name='name' value={name.val}/></p>
        <p>Email:<input onChange={email.onChangeVal} type='text' name='email'value={email.val}/></p>
        <p>Password:<input onChange={pass.onChangeVal} type='password' name='pass' value={pass.val}/></p>
        <p>PasswordConf:<input onChange={passConf.onChangeVal} type='password' name='passConf' value={passConf.val}/></p>
        <p><button>Submit </button></p>
    </form>
}


export default RegisterForm;
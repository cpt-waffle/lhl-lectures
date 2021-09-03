import React, {useState} from 'react';
import useForm from '../hooks/useForm';

// Custom hooks
// is a file, that contains your ENTIRE state
// This file can be REUSED many times for different 
// components.

const RegisterForm = function(props) {
    const {username, pass, onChangeUser, onChangePass} = useForm();

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log("-------------------");
        console.log(username, pass);
        console.log("-------------------");

    }

    return (
        <form onSubmit={onSubmit}>
            Name:<input type='text' name='username' onChange={onChangeUser}/>
            <br/>
            Pass:<input type='password' name='pass' onChange={onChangePass}/>
            <br/>
            <button>Submit</button>
        </form>
    )
}


export default RegisterForm;
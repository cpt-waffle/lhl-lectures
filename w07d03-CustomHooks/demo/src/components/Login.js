import React from 'react';
import useForm from '../hooks/useForm';

// is useForm SHARING its data between two or more components?

const LoginForm = function() {
    const email = useForm('a@b.ca');
    const pass = useForm();
// name <input>
// email
// pass
// passConf
// Button Toggling


//  A Custom hook is all of the logic of the component (state, useEffect, )
// BUT WITHOUT THE RENDER, AND THIS LOGIC CAN BE RE-USED!!
    return (
        <form>
            <h1>Login Form!</h1>
            <p>Email:<input type="email" name="email" value={email.val} onChange={email.handleVal}/></p>
            <p>Pass:<input type="password" name="pass" value={pass.val} onChange={pass.handleVal}/></p>
        </form>
    )
}

export default LoginForm;
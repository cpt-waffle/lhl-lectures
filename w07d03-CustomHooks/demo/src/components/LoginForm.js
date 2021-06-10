import React from 'react';
import useForm from '../hooks/useForm'

const LoginForm = function() {
    const email = useForm('v@k.ca');
    const password = useForm();
    return (
        <div>
            <h3>Login Form</h3>
            <p>Email:<input type='email' name='email'  value={email.val} onChange={email.onValChange}/><button onClick={email.clear}>clear</button></p>
            <p>Password:<input type='password' name='pass' value={password.val} onChange={password.onValChange}/></p>
            <p><button>Submit</button></p>
        </div>
    )
}

export default LoginForm;
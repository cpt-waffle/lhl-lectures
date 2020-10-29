import React from 'react';
import useForm from '../hooks/useForm';


function LoginForm(props) {
    const {email, handleEmail, password, handlePassword, handleSubmit} = useForm();


    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <p>Email: <input type="email" name="email" value={email} onChange={handleEmail}/></p>
            <p>Password: <input type="password" name="password" value={password} onChange={handlePassword}/></p>
            <p><button>Submit</button></p>
        </form>
    )

}

export default LoginForm;
import React from 'react'
import useForm from '../hooks/useForm'
// useContext..

function LoginForm(props) {
    const email = useForm();
    const pass = useForm();

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(email.val, pass.val);
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Login Form</h1>
            <p>Email: <input type="email" 
                        name="email"
                        onChange={email.handleValChange}
                    /> 
            </p>
            <p>Password: <input type="password" name="password" onChange={pass.handleValChange}/> </p>
            <p><button>Submit!</button></p>
        </form>
    )
}



export default LoginForm;
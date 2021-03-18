import React from 'react';
import useForm from '../hooks/useForm';

function LoginForm(props) {
    const email = useForm();
    const pass = useForm();

    const onSubmit = (evt) => {
        evt.preventDefault();
        alert(`${email.val}   ${pass.val}`);
    }


    return (<form onSubmit={onSubmit}>
        <h1>Login Form</h1>
        <p>username: <input type="email" name="email" value={email.val} onChange={email.onChangeVal}/></p>
        <p>password: <input type="password" name="password" value={pass.val} onChange={pass.onChangeVal}/></p>
        <p><button>Submit</button></p>
    </form>)

}

export default LoginForm;
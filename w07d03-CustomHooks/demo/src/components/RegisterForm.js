import React from 'react';
import useForm from '../hooks/useForm';
// can we reuse some of the state logic somewhere else?
// absolutely with this wierd thingy called CUSTOM HOOKS!!!

function RegisterForm(props) {
    const email = useForm();
    const pass = useForm();
    const confPass = useForm();

    const onSubmit = (evt) => {
        evt.preventDefault();
        alert(`${email}   ${pass}`);
    }

    return (<form onSubmit={onSubmit}>
        <h1>Register Form</h1>
        <p>username: <input type="email" name="email" value={email.val} onChange={email.onChangeVal}/></p>
        <p>password: <input type="password" name="password" value={pass.val} onChange={pass.onChangeVal}/></p>
        <p>password: <input type="password" name="password" value={confPass.val} onChange={confPass.onChangeVal}/></p>

        <p><button>Submit</button></p>
    </form>)

}

export default RegisterForm;
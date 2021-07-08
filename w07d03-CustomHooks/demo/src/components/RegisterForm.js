import React from 'react';
import useForm from '../hooks/useForm';



const RegisterForm = function() {
    const name = useForm();
    const email = useForm();
    const pass = useForm();
    const passConf = useForm();
    console.log(name);
    console.log(email);
// name <input>
// email
// pass
// passConf
    return (
        <form>
            <h1>Register Form!</h1>
            <p>Name:<input type="text" name="name" value={name.val} onChange={name.handleVal}/></p>
            <p>Email:<input type="email" name="email" value={email.val} onChange={email.handleVal}/></p>
            <p>Pass:<input type="password" name="pass" value={pass.val} onChange={pass.handleVal}/></p>
            <p>Pass Conf:<input type="password" name="passConf" value={passConf.val} onChange={passConf.handleVal}/></p>
        </form>
    )
}

export default RegisterForm;


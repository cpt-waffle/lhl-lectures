import React from 'react';
import useForm from '../../hooks/useForm';

function RegisterForm(props) {
    // THIS is coming FROM another file....
    const email = useForm();
    const pass = useForm();
    const confPass = useForm();

    return (
        <div>
            <form>
                <p>Email:<input type='email' name="email" value={email.val} onChange={(evt) => email.handleVal(evt.target.value)}/></p>
                <p>Password: <input type="password" name="password" value={pass.val} onChange={evt => pass.handleVal(evt.target.value)}/></p>
                <p>Confirm Pass: <input type="password" name="password" value={confPass.val} onChange={evt => confPass.handleVal(evt.target.value)}/></p>
                
                <p><button>Submit!</button></p>
            </form>
        </div>
    )
}

export default RegisterForm;
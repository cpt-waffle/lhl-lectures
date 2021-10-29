//import react
import React from 'react';
import useForm from '../hooks/useForm';


const RegisterForm = () => {
    const values = useForm();

    return (
        <form>
            <h1>Register Form</h1>
            <p>Email: 
                <input 
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={values.onChangeEmail}
                />
            </p> 
            <p>Password: <input type='password' name='pass' value={values.pass} 
            onChange={(evt) => values.setPass(evt.target)}/> </p> 
        </form>
    )
}

export default RegisterForm;

// export default
// return

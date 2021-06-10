import React  from 'react';
import useForm from '../hooks/useForm'

const RegisterForm = function() {
    // console.log(useForm);
    const {num, addOne, name, onNameChange, email, onEmailChange, pass, onPassChange} = useForm();
    console.log("--------- AA ------")
    return (
        <div>
            <h3>Register Form</h3>
            <h1>{num}</h1>
            <button onClick={addOne}>ADD ONE </button>
            <p>Name:<input type='text' name='name' value={name} onChange={onNameChange}/></p>
            <p>Email:<input type='email' name='email'  value={email} onChange={onEmailChange}/></p>
            <p>Password:<input type='password' name='pass' value={pass} onChange={onPassChange}/></p>
            <p><button>Submit</button></p>
        </div>
    )
}

export default RegisterForm;
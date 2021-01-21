import React from 'react';
import useForm from '../../hooks/useForm';


function LoginForm(props) {

    const email = useForm();
    const password = useForm();



    return (
        <div>
            <form>
                <p>Email:<input type='email' name="email" value={email.val} onChange={evt => email.handleVal(evt.target.value)}/></p>
                <p>Password: 
                    <input 
                        type="password" 
                        name="password" 
                        value={password.val} 
                        onChange={evt => password.handleVal(evt.target.value)}
                    />
                    <button onClick={password.cleanup}>CLEAR FIELD</button>
                </p>
                <p><button>Submit!</button></p>
            </form>
        </div>
    )
}

export default LoginForm;
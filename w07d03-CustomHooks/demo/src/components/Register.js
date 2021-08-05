import React from 'react';
import useForm from '../hooks/useForm';


const Register = function(props) {
    const {nickname, pass, onNickChange, onPassChange} = useForm('waffle', 123);
    return (<form>
        <h1>Register Form</h1>
        
        <p>Nickname:<input type='text' name='nickname' value={nickname} onChange={onNickChange}/></p>
        <p>Password:<input type='password' name='password' value={pass} onChange={onPassChange}/></p>

        <p><button>Login!</button></p>
    </form>)
}


export default Register;

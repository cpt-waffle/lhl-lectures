import React, {useState} from 'react';
import useForm from '../hooks/useForm';


const LoginForm = function(props) {
    const {username, onChangeUser } = useForm();

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log("-------------------");
        console.log(username);
        console.log("-------------------");

    }

    return (
        <form onSubmit={onSubmit}>
            Name:<input type='text' name='username' onChange={onChangeUser}/>
            <br/>
            <br/>
            <button>Submit</button>
        </form>
    )
}


export default LoginForm;
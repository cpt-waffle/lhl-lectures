import React, {useState, useEffect} from 'react';
import useForm from '../hooks/useForm';


function UserForm(props) {
    // console.log(useForm());
    const firstName = useForm('Vasiliy');
    const lastName = useForm();
    const email = useForm();
    const password = useForm('Vasiliy');



    return (
        <form>
            <h1>User Form</h1>
            <p>First Name: <input type="text" name="firstName" value={firstName.value} onChange={evt => firstName.handleVal(evt.target.value)}/><button onClick={firstName.clear}>clear</button></p>
            <p>Last Name: <input type="text" name="lastName" value={lastName.value} onChange={lastName.handleVal}/></p>
            <p>Email: <input type="email" name="email" value={email.value} onChange={email.handleVal}/></p>
            <p>Password: <input type="password" name="password" value={password.value} onChange={password.handleVal}/></p>
            <p><button>Submit</button></p>
        </form>
    )

}

export default UserForm;
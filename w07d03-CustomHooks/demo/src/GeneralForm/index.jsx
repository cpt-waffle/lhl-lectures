import React, { useState } from 'react';
import useForm from '../hooks/useForm';



function GeneralForm(props) {
    // console.log(useForm());
    const firstName = useForm();
    const lastName = useForm();
    const email = useForm();
    const username = useForm();

    console.log(useForm());

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(firstName.value, lastName.value, email.value, username.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <p>First Name:<input type="text" name="firstName" value={firstName.value} onChange={(evt) => firstName.setValue(evt.target.value)}/>
                <button onClick={firstName.clear}>Clear Input</button>
            </p>
            <p>Last Name:<input type="text" name="lastName" value={lastName.value} onChange={(evt) => lastName.setValue(evt.target.value)}/></p>
            <p>Email:<input type="email" name="email" value={email.value} onChange={(evt) => email.setValue(evt.target.value)}/></p>
            <p>Username:<input type="text" name="userName" value={username.value} onChange={(evt)=> username.setValue(evt.target.value)}/></p>

            <button>Submit</button>

        </form>
    )
}


export default GeneralForm;
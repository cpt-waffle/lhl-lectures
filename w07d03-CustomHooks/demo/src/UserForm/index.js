import React from 'react';

import useForm from '../hooks/useForm';


function UserForm() {
    const {firstName, handleSetFirstName, lastName, handleSetLastName} = useForm();
    return (
        <form >
            <h1>USER FORM HERE</h1>
        <p> First Name:<input name="firstName" type="text" value={firstName} onChange={handleSetFirstName}/></p>
        <p> Last Name:<input name="lastName" type="text" value={lastName} onChange={handleSetLastName}/></p>
        </form>
    )
}

export default UserForm;
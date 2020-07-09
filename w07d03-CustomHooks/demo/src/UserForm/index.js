import React, { useState } from 'react';

import useGeneralForm from '../hooks/useGeneralForm';

// WHAT IF I TOLD U THAT EVERY SINGLE STATE
// CAN BE MOVED INTO A FILE AND RE-USED!!!!!!!!

// Rule of custom Hooks ( convertion )
// Your hook name should start with the lowercase `use` word

// useGeneralForm.js


function UserForm(props) {

    const {
        firstName, 
        firstNameOnChange,
        firstNameClear,
        lastName,
        lastNameOnChange,
        lastNameClear,
    } = useGeneralForm();

    return (<div>
        THIS IS A USER FORM
        <p>
            First name: 
            <input
                value={firstName}
                onChange={firstNameOnChange}
                name="firstName"
            />
            <button onClick={firstNameClear}>Clear</button>
        </p>
        <p>
            Last name: 
            <input
                value={lastName}
                onChange={lastNameOnChange}
                name="firstName"
            />
            <button onClick={lastNameClear}>Clear</button>
        </p>
    </div>)
}


export default UserForm;
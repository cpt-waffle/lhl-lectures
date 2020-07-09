import React, { useState } from 'react';

import useGeneralForm from '../hooks/useGeneralForm';

// WHAT IF I TOLD U THAT EVERY SINGLE STATE
// CAN BE MOVED INTO A FILE AND RE-USED!!!!!!!!

// Rule of custom Hooks ( convertion )
// Your hook name should start with the lowercase `use` word

// useGeneralForm.js


function GeneralForm(props) {

    const firstName = useGeneralForm();
    const lastName = useGeneralForm();
    const email = useGeneralForm();
    const nickName = useGeneralForm();


    return (<div>
        THIS IS A GENERAL FORM
        <p>
            First name: 
            <input
                value={firstName.value}
                onChange={firstName.onChange}
                name="firstName"
            />
            <button onClick={firstName.clear}>Clear</button>
        </p>
        <p>
            Last name: 
            <input
                value={lastName.value}
                onChange={lastName.onChange}
                name="firstName"
            />
            <button onClick={lastName.clear}>Clear</button>
        </p>
        <p>
            Nickname: 
            <input
                value={nickName.value}
                onChange={nickName.onChange}
                name="firstName"
            />
            <button onClick={nickName.clear}>Clear</button>
        </p>
        <p>
            Email: 
            <input
                value={email.value}
                onChange={email.onChange}
                name="firstName"
            />
            <button onClick={email.clear}>Clear</button>
        </p>
    </div>)
}


export default GeneralForm;
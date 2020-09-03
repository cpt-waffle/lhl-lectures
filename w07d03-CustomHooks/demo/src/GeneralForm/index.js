import React, { useState } from 'react';
import useForm from '../hooks/useForm';

function GeneralForm(props) {
    // const { firstName, lastName, email, phone, address, handleSetFirstName, handleSetLastName, handleSetAddress, handleSetEmail, handleSetPhone } = useForm();
    const firstName = useForm();
    const lastName = useForm();
    const address = useForm();
    const email = useForm();
    const phone = useForm();
    // console.log(firstName)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log({firstName, lastName, email, address, phone});
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <p> First Name:<input name="firstName" type="text" value={firstName.value} onChange={firstName.handleSetValue}/></p>
            <p> Last Name:<input name="lastName" type="text" value={lastName.value} onChange={lastName.handleSetValue}/></p>
            <p> Address Name:<input name="address" type="text" value={address.value} onChange={address.handleSetValue}/></p>
            <p> Email:<input name="email" type="text" value={email.value} onChange={email.handleSetValue}/></p>
            <p> Phone Number:<input name="phone" type="text" value={phone.value} onChange={phone.handleSetValue}/></p>
            <button>Finally submit</button>
        </form>
        
    </div>)
}


export default GeneralForm;
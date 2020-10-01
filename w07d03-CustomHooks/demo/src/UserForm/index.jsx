import React from 'react';
import useForm from '../hooks/useForm';


function UserForm(props) {
    const {firstName, lastName, setFirstName, setLastName} = useForm();

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(firstName, lastName);
    }

    return (
        <form onSubmit={onSubmit}>
            <p>First Name:<input type="text" name="firstName" value={firstName} onChange={(evt) => setFirstName(evt.target.value)}/></p>
            <p>Last Name:<input type="text" name="lastName" value={lastName} onChange={(evt) => setLastName(evt.target.value)}/></p>

            <button>Submit</button>

        </form>
    )
}


export default UserForm;
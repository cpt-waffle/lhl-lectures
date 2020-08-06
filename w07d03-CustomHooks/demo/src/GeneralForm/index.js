import React, { useState } from 'react';
import useForm from '../hooks/useForm';

function GeneralForm(props) {
    const info = useForm();
    const planets = useForm();
    const email = useForm();
    console.log(info, planets, email);

    const onSubmit = () => {
        console.log({info: info.value, planets: planets.value, email: email.value});
    }

    return (<div>
    THIS IS A GENERAL FORM

        <p>
            Information:
            <input
                value={info.value}
                onChange={info.onValueChange}
                type="text"
                name="information"
            />
            <button onClick={info.clear}>Clear</button>
        </p>

        <p>
            Planets:
            <input
                value={planets.value}
                onChange={planets.onValueChange}
                type="text"
                name="planets"
            />
            <button onClick={planets.clear}>Clear</button>

        </p>
        <p>
            Email:
            <input
                value={email.value}
                onChange={email.onValueChange}
                type="email"
                name="email"
            />
            <button onClick={email.clear}>Clear</button>

        </p>
        <button onClick={onSubmit}>Submit</button>
    </div>)
}


export default GeneralForm;
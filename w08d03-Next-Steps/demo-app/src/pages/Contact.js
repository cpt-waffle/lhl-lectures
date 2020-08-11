import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function Contact(props) {

    const [state, setState] = useContext(GlobalContext);
    return (
        <div>
            <h1>Contact</h1>
            <h3>{state.count}</h3>
            <button onClick={() => setState(prev => ({...prev, count: prev.count-1}))}>CLICK ME TO GO UP</button>

        </div>
    )
}
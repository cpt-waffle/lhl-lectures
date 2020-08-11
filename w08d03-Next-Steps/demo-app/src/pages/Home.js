import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function Home(props) {
    const [state, setState] = useContext(GlobalContext);


    return (
        <div>
            <h1>Home Page!!!</h1>
            The counter is: {state.count}
            <button onClick={() => setState(prev => ({...prev, count: prev.count+1}))}>CLICK ME TO GO UP</button>
        </div>
    )
}
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext'


export default function Dogs(props) {
    const [state, setState] = useContext(GlobalContext);
    console.log(state)
    return (
        <div>
            <h4>Welcome to the Dogs Page!!</h4>
            <h4>THe counter is {state.count}</h4>
            <button onClick={() => setState(prev => ({...prev, count: prev.count-1}))}>Click me</button>

            <Link to="/cats">Cats Link</Link>
        </div>
    )
}
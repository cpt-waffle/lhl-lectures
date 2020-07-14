import React, { useContext } from 'react';
import Vibe from '../components/Vibe';
import GlobalContext from '../context/GlobalContext'

function DogPage(props) {
    const [state, setState] = useContext(GlobalContext);
    return (
        <div>
            <h1>This is a Dog page full of awesomeness!!</h1>
            <h3>{state.count}</h3>
            <button onClick={() => setState(prev => ({...prev, count: prev.count + 1}))}>add up</button>
            {props.vibes.map(vibe => <Vibe key={vibe.id} {...vibe}/>)}
        </div>
    )
}

export default DogPage;

import Vibe from '../components/Vibe';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext'

function CatPage(props) {
    const [state, setState] = useContext(GlobalContext);
    return (
        <div>
            <h1>This is a Cat page full of awesomeness!!</h1>
            <h3>{state.count}</h3>
            <button onClick={() => setState(prev => ({...prev, count: prev.count + 1}))}>add up</button>
            {props.vibes.map(vibe => <Vibe key={vibe.id} {...vibe}/>)}
        </div>
    )
}

export default CatPage;
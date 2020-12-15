import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function Home(props) {
    const [state, setState] = useContext(GlobalContext);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => setState(prev => ({...prev, count: prev.count+1}))}>Add One</button>
            <h1>This is my home component</h1>
        </div>
    )
}
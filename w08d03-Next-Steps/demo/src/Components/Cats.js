import React, { useContext } from 'react'; 
import GlobalContext from '../Context/GlobalContext';

function Cats(props) {
    const [state, setState] = useContext(GlobalContext);
    return (
        <div>
            <h1>The count is: {state.count}</h1>
            <button onClick={() => setState({count: state.count - 1})}>Click me </button>
            <h3>This is my Cats Component with Cats</h3>
        </div>
    )
}


export default Cats;
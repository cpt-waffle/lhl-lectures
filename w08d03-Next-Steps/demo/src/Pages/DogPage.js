// Step 2: import useContext, to destruct the state out of the context
import React, { useContext } from 'react'; 
import Dogs from '../Components/Dogs';

// Step 1: import the context to get the state
import GlobalContext from '../Context/GlobalContext';

const arr = [
    'https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500',
    'https://meme.xyz/uploads/posts/t/l-4524-more-espresso-less-depresso.jpg',
]

function DogPage(props) {
    // Destucture here
    const [state, setState] = useContext(GlobalContext);
    console.log(state);
    return (
        <div>
            <h1>{state.count }</h1>
            <button onClick={() => setState({count: state.count + 1})}>Click me </button>
            <h1>Dogs Page</h1>
            {arr.map((d,key) => <Dogs key={key} src={d} />)}
        </div>
    )
}


export default DogPage;

import './App.css';
import {useState, useReducer} from 'react';

function App() {
  const [num, setNum] = useState(0);

  const initialState = {likes: 10, dislikes: 5};

  const reducer = (state, action) => {
    console.log("this is my reducer !!!");
    console.log("state", state);
    console.log("action", action);
    if (action === 'LIKES') {
      return {...state, likes: state.likes + 1};
    } else if (action === 'DISLIKES') {
      return {...state, dislikes: state.dislikes + 1};
    } else {
      return {likes: 99, dislikes: 99}
    }
  }


//                                                the default State
  const [state, setState] = useReducer(reducer, initialState);
  // a function that runs when the state needs to be changed  

  const addOne = () => {
    // react collects all the `SetNum functions`
    // in finds all prevs and runs them all in command
    // fixing the multi state calls and increasing performance
    setNum(prev => {
      return prev + 1;
    }); // async

    // whenever you are ALTERING the state
    // try your best to use prev
    // whenver you are REPLACING the state COMPLETELY
    // setState(0)
  }

  const onLikesClick = () => {
    console.log("likes has been clicked!");
    setState('LIKES');
  }

  const onDislikesClick = () => {
    setState('DISLIKES');
  }

  return (
    <div className="App">
      <h1>prev and reducers</h1>
      <h1>{num}</h1>
      <button onClick={addOne}>Add one</button>

      <h1>Likes {state.likes}</h1>
      <button onClick={onLikesClick}>Likes +1</button>
      <h1>Dislikes {state.dislikes}</h1>
      <button onClick={onDislikesClick}>Likes +1</button>
    </div>
  );
}

export default App;

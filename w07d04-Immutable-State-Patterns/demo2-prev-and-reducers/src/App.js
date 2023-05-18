import logo from './logo.svg';
import './App.css';
import {useState, useReducer} from 'react';

// initial state <-- (initial state)
// funtion that changes that state based on x,y,z parameters <-- (reducer)

function App() {
  const initialState = {likes:10, dislikes: 5};
  const reducer = (state, action) => {
    if (action === 'likes') {
      return {...state, likes: state.likes + 1}
    } else if (action === 'dislikes') {
      return {...state, dislikes: state.dislikes + 1}
    } else if (action === 'reset') {
      return {...state, likes: 0, dislikes: 0}
    }

    // return {likes: 101, dislikes:22}
  }
//              dispatch
  const [state, setState] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>prev and reducers</h1>
      <button onClick={() => setState('likes')}>Likes:  {state.likes}</button>
      <button onClick={() => setState('dislikes')}>Dislikes: {state.dislikes}</button>
      <button onClick={() => setState('reset')}>reset</button>
    </div>
  );
}

export default App;

import './App.css';
import { useState, useReducer } from 'react';

function App() {


  // initial state
  const initialState = {likes: 50, dislikes: 50,  likesPercent: 50, dislikePercent: 50};
  // function to change that state
  const func = (state, action) => {

    if (action.command === 'change_likes') {
      const totalLikes = state.likes + action.value;
      const total = state.likes + state.dislikes;
      const result = totalLikes/total * 100;

      return {...state, likes: state.likes + action.value, likesPercent: result};
    } else if (action.command === 'change_dislikes') {
      return {...state, dislikes: state.dislikes + action.value, };
    }

    return {likes: 0, dislikes: 0, likesPercent:0, dislikePercent: 0 };
  }

  // useReducer
  const [state, setState] = useReducer(func, initialState);


  const onLikesClick = () => {
    // batching
    setState({command: 'change_likes', value: 1});

  }


  const onDislikesClick = () => {
    setState({command: 'change_dislikes', value: 3})
  }



  return (
    <div className="App">
      <h1>prev and reducers</h1>
      <button onClick={onLikesClick}>Likes {state.likes} {state.likesPercent}%</button>
      <button onClick={onDislikesClick}>Dislikes {state.dislikes}</button>

    </div>
  );
}

export default App;

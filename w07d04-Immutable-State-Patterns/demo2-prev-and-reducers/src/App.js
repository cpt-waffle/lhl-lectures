import { useState, useReducer} from 'react';
import './App.css';

function App() {

  const initialState = {likes: 5, dislikes: 7};

  const reducer = (state, action) => {
    console.log("my function");
    if (action === 'LIKES') {
      return {...state, likes: state.likes + 1};
    } else if (action === 'DISLIKES') {
      return {...state, dislikes: state.dislikes + 1};
    } else {
      return {likes: 1, dislikes: 1}
    }
  }


  const [state, setState] = useReducer(reducer, initialState);



  const onLikesClick = () => {
    setState('LIKES');
    // setLikes(likes + 1); // async
    // setDisLikes(dislikes - 1 ); // async
  }

  const onDisLikesClick = () => {
    setState('DISLIKES');
    // setDisLikes(dislikes + 1);
  }

  return (
    <div className="App">
      <h1>prev and reducers</h1>
      <button onClick={onLikesClick}>Likes {state.likes}</button>
      <button onClick={onDisLikesClick}>dislikes {state.dislikes}</button>
    </div>
  );
}

export default App;

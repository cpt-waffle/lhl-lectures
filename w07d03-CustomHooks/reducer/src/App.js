import { useState, useReducer } from 'react';
import './App.css';

function App() {
  // const [likes, setLikes] = useState(0);
  // const [disLikes, setDislikes] = useState(0);
  // const [LikesPercent, setLikesPercent] = useState(0);
  // const [dislikesPercent, setDislikesPercent] = useState(0);

  const intialState = {
    likes: 0,
    disLikes: 0,
    LikesPercent: 0,
    dislikesPercent: 0
  };

  const func = (state, action) => {
    console.log("the function runs >:D");
    console.log(state);
    console.log(action);
    if (action.command === 'change_likes') {
      const newLikes = state.likes + action.value;
      const total = newLikes + state.disLikes;
      const percent = (newLikes) / total;
      return {...state, likes: newLikes, LikesPercent: Math.round(percent)}
    } else if (action.command === 'change_dislikes') {
      const newDislikes = state.disLikes + action.value;
      const total = newDislikes + state.disLikes;
      const percent = (newDislikes) / total;
      return {...state, disLikes: newDislikes + action.value, dislikesPercent: percent};

    }

    return {
      likes: 99,
      disLikes: 99,
      LikesPercent: 11,
      dislikesPercent: 11
    };
  }

  const [state, setState] = useReducer(func, intialState);


  const onLikesClick = () => {
    setState({command: 'change_likes', value: 1});
  }

  const onDislikes = () => {
    setState({command: 'change_dislikes', value: 2});

  }


  return (
    <div className="App">
      <h1>Reducers</h1>
      <button onClick={onLikesClick}><h2>Likes {state.likes}</h2></button>
      <button onClick={onDislikes}><h2>Dislikes {state.disLikes}</h2></button>

    </div>
  );
}

export default App;

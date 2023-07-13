
import './App.css';
import {useReducer} from 'react';

// useReducer ==> useState++
function App() {
  const initialState = {likes: 10, dislikes: 5};
  const reducer = (state, action) => {

    if (action === "LIKES") {
      return {...state, likes: state.likes + 1}
    } else if (action === "DISLIKES") {
      return {...state, dislikes: state.dislikes + 1}
    } else if (action === "RESET" ) {

    } else {

    }
  }

  // const [likes, setLikes] = useState([])
  const [state, setState] = useReducer(reducer, initialState);

  console.log(state);
  // how to build components
  // how to pass props
  // useState
  // useEffect

  const onLikesClick = () => {
    setState('LIKES');
  }

  const onDislikesClick = () => {
    setState('DISLIKES');
  }

  return (
    <div className="App">
      <h1>prev and reducers</h1>
      <button onClick={onLikesClick}>Likes {state.likes}</button>
      <button onClick={onDislikesClick}>Dislikes {state.dislikes}</button>

    </div>
  );
}

export default App;

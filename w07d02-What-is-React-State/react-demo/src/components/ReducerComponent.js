import { useState, useReducer } from "react";

const ReducerComponent = () => {
  // const [likes, setLikes] = useState(5);
  // const [dislikes, setDislikes] = useState(2);

  const func = (state, action) => {
    console.log("hello from funct");
    console.log(state);
    console.log(action);
    if (action.command === 'change_likes') {
      return {...state, likes: state.likes + 1};
    }

    if (action.command === 'change_likes') {
      return {...state, likes: state.likes + 1};
    }


    return {likes: 99, dislikes: 99};
  }


  const [state, setState] = useReducer(func, {likes: 10, dislikes: 10});



  const onLikesClick = () => {
    // setLikes(likes + 1); // async
    // console.log(likes);
    // setDislikes(dislikes - 1);
    setState({command: 'change_likes', value: 1});

  }

  const onDislikesClick = () => {
    // setDislikes(dislikes + 1);
    // setLikes(likes - 1);
  }

  return (
    <div>
      <h1>reducer compoent</h1>
      <h1>likes {state.likes}</h1>
      <button onClick={onLikesClick}>Add Like</button>

      <h1>dislikes {state.dislikes}</h1>
      <button>Add Dislike</button>

    </div>
  )


}


export default ReducerComponent;
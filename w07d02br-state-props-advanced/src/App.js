import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CommentList from './Components/CommentList';

// useEffect that gets this data from a server...
// API

function App() {
  const [num, setNum] = useState(1);
  const [penguin, setPenguin] = useState([]);

  useEffect(() => {
    axios.get('/comments').then(res => {
      console.log('data', res.data.comments);
      setPenguin(res.data.comments)
    })
  }, [])

  const pizza = (id, type) => {
    console.log("Line 21: Pizza Function!");
    console.log(id, type);
    // change my state
    setPenguin(prev => {
      return prev.map(comment => {
        if (comment.id === id) {
          if (type === 'like') {
            return {...comment, likes: comment.likes + 1 }
          } else {
            return {...comment, dislikes: comment.dislikes + 1 }
          }
        }
        return comment;
      })
    })



    // NOT THE ORIGINAL <---
    // loop through my "state"
    // find the one state item that was clicked based on the id
    // find the type of click (like/dislike)
    // create a new comment object, with the comment, but likes or dislikes were incremented

    // set the new state
  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <button onClick={() => setNum(prev => prev + 1)}>{num}</button>
      <CommentList commentsArr={penguin} cat={pizza}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './Components/CommentList';
import './App.css';
// useEffect that gets this data from a server...
// API

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('/comments').then(res => {
      console.log("res", res);
      setComments(res.data.comments);
    })
  }, []);

  const like = (type, id) => {
    console.log(type, id);
    // loop through my CURRENT state
    // // create a brand new state with everything from the CURRENT one
    //  find the comment that was clicked in the current state
    //  find if its a like click or dislike click
    //  increment that like/dislike count
    //  set state
    setComments(prev => {
      return prev.map(comment => {
        if (comment.id === id) {
          if (type === 'like') {
            return {...comment, likes: comment.likes + 1};
          } else {
            return {...comment, dislikes: comment.dislikes + 1};
          }
        }
        return comment;
      })
    })

  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList monkeyfuzz={comments} toaster={like}/>
    </div>
  );
}

export default App;

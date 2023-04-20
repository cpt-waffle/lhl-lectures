import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import CommentList from './Components/CommentList';
// useEffect that gets this data from a server...
// API

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('/comments').then(res => {
      console.log(res);
      setComments(res.data.comments);
    })
  }, [])  // <-- depedancy array, 

  const howCanYouSaidThat = (id, type) => {
    console.log(id, type);
    // immutability patterns
		// make a copy of a state
		// loop through the state
    // set copy to the original
    setComments(prev => {
      return prev.map(comment => {
        // find the item that was clicked (id)
        if(comment.id === id ) {
          // find the like or dislike that was clicked (type)
          // increment that item's like or dislike
          if (type === 'like') {
            return {...comment, likes: comment.likes + 1};
          } else {
            return {...comment, dislikes: comment.dislikes + 1};
          }
        }
        return comment;
      }); // async

    })
  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList reply={comments} toast={howCanYouSaidThat}/>
    </div>
  );
}

export default App;

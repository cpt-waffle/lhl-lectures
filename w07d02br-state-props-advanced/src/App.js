import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CommentList from './Components/CommentsList';

// useEffect that gets this data from a server...
// API

function App() {
  const [comments, setComments] = useState([]); // []
  // the secondary function changes state value
  // and tells the function to Re-render ( re-run)
  
  useEffect(() => {
    axios.get('/comments').then(res => {
      setComments(res.data.comments);
    })
  }, [])

  const isEven = (type, id) => {
    setComments(prev => {
      return prev.map(comment => {
        if (id === comment.id){
          if (type === 'likes') {
            return {...comment, likes: comment.likes + 1}
          } else {
            return {...comment, dislikes: comment.dislikes + 1}
          }
        } 
        return comment;
      })
    })
  }

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList comments={comments} onClick={isEven}/>
    </div>
  );
}

export default App;

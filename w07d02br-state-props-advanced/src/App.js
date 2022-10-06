import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CommentList from './Components/CommentList';

// useEffect that gets this data from a server...
// API

function App() {
  const [burger, setBurger] = useState([]);
  const [num, setNum] = useState(3);

  useEffect(() => {
    console.log("test");
    axios.get('/comments').then(response => {
      console.log(response);
      setBurger(response.data.comments);
    })
  }, [])

  const onClick = (id, type) => {
    console.log(id, type);
    console.log("App.js Line 21 <------ :)");
    setBurger(prev => {
      // loop through my comments
      return prev.map(comment => {
        // find the one that was clicked ( id  match with id loop)
        if (id === comment.id) {
          if (type === 'like') {
            return {...comment, likes: comment.likes + 1}
          } else {
            return {...comment, dislikes: comment.dislikes + 1}
          }
        }
        return comment;
      })
    })

    // find out which button was clicked (type like or dislike)
    // increment the like/dislike counter
    // re-render!
  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList giraffe={burger} taromilktea={onClick}/>
    </div>
  );
}

export default App;

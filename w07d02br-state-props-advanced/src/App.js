import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CommentList from './Components/CommentList';
// useEffect that gets this data from a server...
// API

function App() {
  const [bark, setBark] = useState([]);
  useEffect(() => {
    // promise.all([axios.get, axios.get...]).then(res => res[0])
    axios.get('/comments').then(res => {
      console.log("response is back!");
      console.log(res);
      setBark(res.data.comments);
    })  
  }, []) /// <-- the dependancy array


  const pie = (type, id) => {
    // setBark([]);
    console.log(type, id)

    // loop through my current state 
    setBark(prev => {
      return prev.map(comment => {
        //  find the comment that was clicked
        if (comment.id === id) {
          if (type === 'likes') {
            return {...comment, likes: comment.likes + 1};
          } else {
            return {...comment, dislikes: comment.dislikes + 1};
          }
        }
        return comment;
      })

    })

    /// find if it was likes or dislikes that was clicked (type)
    // increment that likes or dislikes
    // finish loop
    // set the new altered state to the original using setBark();
  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList pineapple={bark} onBark={pie}/>
    </div>
  );
}

export default App;

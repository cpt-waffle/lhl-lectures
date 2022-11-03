import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CommentList from './Components/CommentList';

// useEffect that gets this data from a server...
// API

function App() {
  const [bark, setBark] = useState([]);
  // no second param --> run anytime anything changes
  // 2nd param = []  --> run once on the first render
  // 2nd param = [val1, val2] --> run anytime when the values in the array change
  useEffect(() => {
    axios.get('/comments').then(res => {
      console.log(res);
      //res.data.comments
      setBark(res.data.comments);
    })

  }, []) 

  // VIRTUAL DOM


  // bark = [3, 2, 1,];
  // {
  //   h16567573: {value: 'Comments for dogs', class: '', }
  //   CList23452w5: {
  //     Comment3-32525: {value: }
  //     Comment2-32525: {value: }
  //     Comment1-32525: {value: }

  //   }
  // }




  const onWoof = (type, id) => {
    console.log("woof line 24 app.js");
    console.log(type, id);
    // change my state
    setBark(prev => {
      // by looping through the old state...
      return prev.map(comment => {
        // find the one that was clicked (by id)
        if (comment.id === id ) {
          // find which action happen ( like or dislike == type)
          if (type === 'like'){
            // CREATE A NEW COMMENT OBJECT... with the comment, BUT likes or dislikes will be changed
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
      <CommentList comments={bark} waffle={onWoof}/>
    </div>
  );
}

export default App;

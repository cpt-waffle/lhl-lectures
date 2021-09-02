import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';

import CommentList from './Components/CommentList';

const commentsData = [
  { 
    id: 1,
    image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    content: 'This is a great comment!!! ',
    likes: 10,
    dislikes: 1,
  },
  {
    id: 2,
    image: 'https://www.rover.com/blog/wp-content/uploads/2019/05/dog-versus-bumblebee-600x340.jpg',
    content: 'Balanced Comments INCOMING',
    likes: 5,
    dislikes: 5,
  },
  {
    id: 3,
    image: 'https://barkpost.com/wp-content/uploads/2016/04/Derp3.jpg',
    content: 'rawr',
    likes: 0,
    dislikes: 10,
  },
  {
    id: 4,
    image: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/cute-derpy-dog-fb.png',
    content: 'I have no idea what im doing ',
    likes: 2,
    dislikes: 1,
  },
]


function App() {




  const [number, setNumber] = useState(22);
  const [comments, setComments] = useState(commentsData);
  
  let num = 0;

  const clicked = (id, type) => {
    console.log("LINE 42 APP.js");
    console.log(id, type);
    // // make a copy of our comments...
    // const commentsCopy = [...comments];
    // // loop through the comments
    // for (let comment of commentsCopy) {
    //   // if id matches
    //   if (comment.id === id ) {
    //     // increment likes or dislikes
    //     if (type === 'likes') {
    //       comment.likes++;
    //     } else {
    //       comment.dislikes++;
    //     }
    //   }
    // }
    // // set the copy to the original
    // setComments(commentsCopy);
    ///////////////// VERSION NUMBER 2 --------------------------
    const commentsCopy = comments.map(comment => {
      if (comment.id === id) {
        if (type === 'likes') {
          comment.likes++;
        } else {
          comment.dislikes++;
        }
      }
      return comment;
    })

    setComments(commentsCopy);
  }


  const addOne = () => {
    num = num + 1;
    console.log(num);
  }

  const addNumber = () => {
    // const setNumber = (val) => {
      // number = val
      // TELL REACT TO RE-RENDER THE APPLICATION BECAUSE SOMETHING CHANGED AND WE NEED TO SHOW TO USER
    // } 
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <h2>{num}</h2><button onClick={addOne}>Add One</button>
      <h2>{number}</h2><button onClick={addNumber}>Add One</button>

      <CommentList arrayOfComments={comments} clicked={clicked}/>
    </div>
  );
}

export default App;

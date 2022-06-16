import React, { useState } from 'react';
import './App.css';
import CommentList from './Components/CommentList';

// API
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

  const [comments, setComments] = useState([...commentsData]);

  const watercup = (type, id) => {
    console.log('Line 41!!!');
    // found which comment was clicked
    console.log(type, id);
    // loop through all my comments
    const commentsCopy = comments.map(comment => {
      // find the the one id that matches the id that i clicked on
      if (comment.id === id) {
        // figure out if i clicked Likes or Dislikes  
        if (type === 'like') {
          comment.likes = comment.likes + 1;
        } else {
          comment.dislikes = comment.dislikes + 1;
        }
      }
      return comment;
    })
    // increment either likes or dislikes
    // set the state
    setComments(commentsCopy);
  }

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList commentsArr={comments} overwatch={watercup}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
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
  const [comments, setComments] = useState(commentsData);
  const handleCommentsChange = (type, id) => {
    console.log("CONSOLE<LOG LINE 42: APP.JS!");
    console.log("LINE 43", type, id);
    // make a copy for comments
    const copyComments = comments.map(comment => {
      // loop through the comments
      // find the the one comment that was clicked (id)
      if (comment.id === id ) {
        // find the button that clicked (type)
        // alter the comment like or dislike 
        if (type === 'like') {
          comment.likes++;
        } else {
          comment.dislikes++;
        }
      }
      return comment;
    })
    // set the state with the new alterned copy
    setComments(copyComments);
  }
  

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList
      dogs={comments} 
      onChange={handleCommentsChange}
      />
    </div>
  );
}

export default App;

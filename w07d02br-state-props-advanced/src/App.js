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

  const [commentsInfo, setcommentsInfo] = useState(commentsData);

  
  
  
  // WHAT if we pass a function??
  const onCommentClick = (type, id) => {
    console.log('LINE 43');
    console.log(type, id);

    const copyComments = commentsInfo.map(comment => {
      // find the comment that was clicked
      if (id === comment.id) {
        if (type === 'likes') {
          comment.likes++;
        } else {
          comment.dislikes++;
        }
      }
      return comment;
    })

    setcommentsInfo(copyComments);


  }

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList bananas={commentsData} acorns={onCommentClick}/>
    </div>
  );
}

export default App;

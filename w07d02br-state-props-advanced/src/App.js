import React, { useState, useEffect } from 'react';
import './App.css';
import CommentList from "./Components/CommentList";
// our fake api data...
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

  const handleComments = (id, type) => {
    console.log(id, type);
    console.log("HELLO FROM LINE 42: App.js")
    // make a copy of state
    // const commentsCopy = [...comments];
    // // loop through the comments
    // for(let comment of commentsCopy) {
    //   // increment a like or dislike for a specific comment
    //   if (comment.id === id) {
    //     if (type === 'dislike') {
    //       comment.dislikes++;
    //     } else {
    //       comment.likes++;
    //     }
    //   }
    // }
    // setComments(commentsCopy);
    // comments = commentsCopy
    // set the copy to original
    ////////////////////////////// How to do it incrementaly
    const commentsCopy = comments.map( comment => {
      if (comment.id === id) {
        if (type === 'dislike') {
          comment.dislikes++;
        } else {
          comment.likes++;
        }
      }
      return comment;
    })
    setComments(commentsCopy);
  }

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList 
        comments={comments} 
        handleComments={handleComments}
      />
    </div>
  );
}

export default App;

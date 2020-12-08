import React, { useState, useEffect } from 'react';
import './App.css';
import CommentList from './Components/CommentList';

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
    console.log("something has been clicked!!!");
    console.log("what is id???", id);
    console.log("type is: ", type);

    // const commentsCopy = [...comments];
    // loop through comments Copy
    // for (let comment of commentsCopy) {
    //   // find the id of the specific comment that was clicked
    //   if (comment.id === id) {
    //     console.log("THIS IS THE SPECIFIC ONE --> ", comment);
    //     // increment like or dislike depending on what was clicked
    //     if (type === 'like') {
    //       comment.likes++;
    //     } else {
    //       comment.dislikes++;
    //     }
    //   }
    // }
    // // set the new modified copy to the original state
    // setComments(commentsCopy);
    const commentsCopy = comments.map( comment => {
      if (comment.id === id) {
        if (type === 'like') {
          comment.likes++;
        } else {
          comment.dislikes++;
        }
      }
      return comment;
    })

    setComments(commentsCopy);
  }

  return (
    <div>
      <CommentList list={commentsData} handleComments={handleComments}/>
      <h1>2nd Comment list</h1>
      <CommentList list={commentsData} handleComments={handleComments}/>
    </div>
  );
}

export default App;

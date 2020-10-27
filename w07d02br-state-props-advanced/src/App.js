import React, { useState, useEffect } from 'react';
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


// Props ALWAYS go down levels ( down down down down down)
// Function calls propagate BACK UP ( up up up to the original function definition )
function App() {
  const [comments, setComments] = useState(commentsData);
  // ALWAYS COPY YOUR STATE --> ALTER THE COPY ---> SET THE COPY AS ORIGINAL 

  // What happens IF I PASS a FUNCTION DOWN INTO COMMENT LIST
  // and comment list PASSES THAT FUNCTION into Comment


  // Props CAN ONLY be passed down down down to components
  // Function Call PROPAGATE back up up up up all the way where they were defined.

  const handleClick = (type, id) => {
    console.log("%c HELLO FROM LINE 50 APP.js", 'color: red');
    console.log(type, id)
    console.log('App.js line 56');
    // make a copy
    // const commentsCopy = [...comments];
    // loop through your copy , find the correct ID thats been clicked
    // for (let comment of commentsCopy) {
    //   if (comment.id === id) {
    //     // increment either like or dislikes
    //     if (type === 'like') {
    //       comment.likes++;
    //     } else {
    //       comment.dislikes++;
    //     }
    //   }
    // } 
    // POST REQUEST to comments/:id/like
    // if post request was successful THEN do the following..
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

  //  loop through array of comments if ID matches do stuff to it
  // then return comment
  return (
    <div>
      <CommentList list={comments} handleClick={handleClick}/>
    </div>
  );
}

export default App;

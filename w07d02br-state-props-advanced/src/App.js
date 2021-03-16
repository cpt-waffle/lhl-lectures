import React, { useState } from 'react';
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

  const [commentsList, setCommentsList] = useState(commentsData)
  const [i, setI] = useState(0);

  const handleIClick = () => {
    setI(i+1);
    console.log(i);
  }

  const handleComment = (type, id) => {
    console.log('Hello from Line 42 App.js');
    console.log(type, id);
    // // -------------- METHOD 1 -----------------
    // // make a copy of our state
    // const commentCopy = [...commentsList];
    // // loop through the comments
    // for (let comment of commentCopy) {
    //   // if i find the correct comment
    //   if (comment.id === id) {
    //     // for that specific type 
    //     if (type === 'like') {
    //       // ++ type 
    //       comment.likes++
    //     } else {
    //       comment.dislikes++
    //     }
    //   } 
    // }
    // // console.log('---->',commentCopy);
    // // once done set the copy to the original
    // setCommentsList(commentCopy)
    // ---------------- METHOD 2 -----------------
    // make a copy of our state
    const commentsCopy = commentsList.map(comment => {
        if (comment.id === id) {
          // for that specific type 
          if (type === 'like') {
            // ++ type 
            comment.likes++
          } else {
            comment.dislikes++
          }
        }
        return comment;
    })
    setCommentsList(commentsCopy)
  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <button onClick={handleIClick}>{i}</button>
      <CommentList list={commentsList} sendIt={handleComment}/>
    </div>
  );
}

export default App;

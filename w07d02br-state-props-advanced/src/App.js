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
  // PROPS ONLY GO DOWN DOWN DOWN DOWN to other components
  // You cannot pass stuff up into parent component...


  // let number = 0;
 // setNumber = (n) => number = n // BUT ALSO TELL REACT TO RERENDER THE VALUE NUMBER ON PAGE
  const [number, setNumber] = useState(0)
  const addNumber = () => {
    setNumber(number + 1);
    console.log(number)
  }

  const [commentsList, setCommentsList] = useState(commentsData)

  const handleClick = (id, type) => {
    console.log("LINE 44 FROM App.js (VERY TOP)")
    console.log(id, type);
    //////////////////////////////////// METHOD 1 //////////////////////////
    // // make a copy of our state
    // const commentsCopy = [... commentsList];
    // // loop through the comments 
    // for (let singleComment of commentsCopy) {
    //   console.log(singleComment);
    //   if (singleComment.id === id) {
    //     // increment a like or a dislike based on the correct comment
    //     if (type === 'like') {
    //       singleComment.likes++
    //     }
    //     else {
    //       singleComment.dislikes++
    //     }
    //   }
    // }
    // console.log(commentsCopy);
    // // set the copy to the original using the setState function (setCommentsList)
    // setCommentsList(commentsCopy)
    ////////////////////////////////////////////////////////
    //                           METHOD 2
    // "what you will see in react way..."
    // make a copy of our state
    // loop through the comments
    const commentsCopy = commentsList.map( singleComment => {
      // return ... commentsCopy.push(...)
      if (singleComment.id === id) {
        // increment like or dislike based on the correct comment
        if (type === 'like') {
          singleComment.likes++
        } else {
          singleComment.dislikes++
        }
      }
      return singleComment // commentsCopy.push(singleComment)
    })
    // set CommentListe to the original using the setState function (setCommentsList)
    setCommentsList(commentsCopy)


  }

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <button onClick={addNumber}>{number}</button>
      <CommentList list={commentsList} handleClick={handleClick}/>
    </div>
  );
}

export default App;

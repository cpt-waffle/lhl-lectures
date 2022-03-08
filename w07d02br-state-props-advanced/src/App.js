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
// PROPERTIES CAN ONLY
// GO DOWN LEVELS

// WHAT IF ...
// I send a function
// down down down INTO Comment Component(s)


// <div>
//   <p>
    
//   </p>
//     {number <---}
//   <p>
    
//   </p>
// <div/>

// VIRTUAL DOM

// {
//   elementDivNumber21314: {
//     elementPNumber1: {
      
//     }
//     elementPNumber2: {

//     }
//     elementPNumber3: {

//     }
//   }
// }



function App() {

  const [comments, setComments] = useState([...commentsData]);
  // STATE is a variable 
  // THAT WHEN IT CHANGES
  // react RE-RENDERS the UI for the user


  const plzBox = (id, type) => {
    // console.log("LINE 44: App.js ");
    // console.log(id, type);
    // // make a copy 
    // const copyComments = [...comments];
    // for (let comment of copyComments) {
    //   // on a SPECIFIC item that was clicked
    //   if (comment.id === id) {
    //     // change likes or dislike counter
    //     if (type === 'like') {
    //       comment.likes++;
    //     } else {
    //       comment.dislikes++;
    //     }
    //   }
    //   // set the copy that altered to the ORIGINAL
    //   setComments(copyComments);
    // }
////////////////////////////////////////////////////////////
    const copyComments = comments.map((comment) => {
      if (comment.id === id) {
        if (type === 'like') {
          comment.likes++;
        } else {
          comment.dislikes++;
        }
      }
      return comment;
    })
    setComments(copyComments);


  }
  
  axios.get('http://localhost:8080/api/days').then(() => {

  })
  

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList jazzHands={comments} batarang={plzBox}/>
     
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
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
  const handleClick = (type, id) => {
    console.log("Line 45: IN APP.js");
    console.log(comments);
    console.log(type, id);
    // METHOD 1 ==== for in loop not the cleanest solution but it works
    // // MAKE a COPY of OG --> comments
    // const commentsCopy = [...comments];
    // // go through the copy, find the correct comment by id
    // for (let index in commentsCopy) {
    //   // alter that comments liek or dislike depending on what was clicked
    //   if (commentsCopy[index].id === id) {
    //     if (type === 'like') {
    //       commentsCopy[index].likes++;
    //     } else {
    //       commentsCopy[index].dislikes++;
    //     }
    //   }
    // }
    // // SET THE COPY TO OG ---> setComments()
    // METHOD 2 ==== REFACTOR

    setComments(comments.map( comment => {
      if (comment.id === id) {
        if (type === 'like') {
          comment.likes++;
        } else {
          comment.dislikes++;
        }
      }
      return comment;
    }));
  }

  const printHello = () => 'hello';

  return (
    <div>
      <h1>{printHello()}</h1>
      <CommentList list={comments} handleClick={handleClick}/>

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import CommentList from './Components/CommentList'
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


// what is state?!
// let num = 0;
// state is just a "special" variable that stores data 
// state tells react: "SOMETHING HAS CHANGED, PLEASE RE-RENDER THE COMPONENT!!!"

// $('button').on('click', function())
function App() {
  // num = 
  const [num, setNum] = useState(0);
  // setNum => (arg) num = arg; BUT ALSO NOTIFY REACT SOMETHING HAS CHANGED!!

  const handleSetNum = () => {
    setNum(num + 1)
  }
  const [comments, setComments] = useState(commentsData);

  const onClickFunction = (id, type) => {
    console.log("THIS FIRED IN APP.JS ON LINE 38 <<<");
    console.log(id, type);


    
    const copyComments = comments.map(item => {
      // find the one id that was changed
      if (item.id === id) {
        if (type === 'like') {
          item.likes++
        } else {
          item.dislikes++;
        }
      }
      return item;
    })
    // loop through the COPY STATE array
    // find the if it was alike or dislike
    // CHANGE the like or dislike ++ 
    setComments(copyComments);
  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <p>Num is => {num} <button onClick={handleSetNum}>PRESS ME!!</button></p>
      <CommentList list={comments} onClick={onClickFunction}/>
    </div>
  );
}

export default App;

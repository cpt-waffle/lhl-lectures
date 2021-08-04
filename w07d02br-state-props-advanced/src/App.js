import React, { useState } from 'react';
import './App.css';
import CommentsList from './Components/CommentsList';

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
  const [list, setList] = useState(commentsData)
  // whats the point of state?
  const onClick = (id, type) => {
    console.log("LINE 41: APP.js");
    console.log(id, type);
    // always use a copy or a brand new object/array 
    const newList = list.map(item  => {
      if (item.id === id) {
        if (type === 'likes') item.likes++;
        else item.dislikes++;
      }
      return item;
    })

    setList(newList);
  }
  // props always go down down down down down through components
  // but when a prop is a function, well it gets executed at up up up up where it was declared

  let number = 55;
  const addNum = () => {
    number = number + 1;
    console.log(number)
  }
  const [num, setNum] = useState(0);
  const increment = () => {
    setNum(num + 1);
  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <button onClick={addNum}>{number}</button>
      <button onClick={increment}>{num}</button>

      <CommentsList banana={list} handleClick={onClick}/>
    </div>
  );
}

export default App;

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
  // state is data that WILL be changed/re-rendered when the setfunction executes...
  const [number, setNum] = useState(0);
  // ^ first var is value
  // ^ 2nd variable is function that sets the state BUT ALSO tells react to re-render 
  // the component
  const setNumber = () => {
    setNum(number + 1);
    // always always always always
    // when you set a state
    // DO NOT TOUCH THE ORIGINAL STATE
  }

  const [list, setList] = useState(commentsData);



  const myFunction = (id, type) => {
    // METHOD 1 -----------------
    // // object destruct the array
    // const listCopy = [...list];
    // // loop through the array
    // for (let comment of listCopy) {
    //   // if id that was clicked matches the id that im currently looping throuhg
    //   if (id === comment.id) {
    //     if (type === 'likes') {
    //       // add +1
    //       comment.likes++;
    //     } else {
    //       // if displikes +1
    //       comment.dislikes++;
    //     }
    //   }
    //   // set copy to the original
    //   setList(listCopy);
    // METHOD 2 ------------
    const listCopy = list.map(item => {
      // find the one id that was changed
      if (item.id === id) {
        if (type === 'likes') {
          item.likes++
        } else {
          item.dislikes++;
        }
      }
      return item;
    })

    setList(listCopy);

  }


  return (
    <div>
      <h1>Comments for Dogs</h1>
      <h1>{number}</h1>
      <button onClick={setNumber}>add 1</button>
      <CommentList
        list={commentsData}
        handleClick={myFunction}
      />
    </div>
  );
}

export default App;

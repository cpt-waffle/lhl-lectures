import React, { useState, useEffect } from 'react';
import CommentList from './Components/CommentList';
import './App.css';

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


function App() {
  debugger;
  const [list, setList] = useState([]);
  useEffect(() => {
    // axios.get('/comments', (data) => )
    setTimeout(() => {
      setList([...commentsData])
    },2000)
  }, [])


  const banana = (id, type) => {
    console.log("BANANA in App.js at Line 42.!")
    console.log(id, type);
    // immutability will awlays be
    // copy OG , change something in it, set the copy to the OG
    const listCopy = list.map((item) => {
      if (item.id === id ) {
        if (type === 'likes') {
          item.likes++;
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
      {list.length ?  <CommentList comments={list} banana={banana}/> : <h1>LOADING....</h1>}
     
    </div>
  );
}

export default App;

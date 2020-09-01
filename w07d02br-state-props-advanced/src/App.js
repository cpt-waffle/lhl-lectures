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


function App() {
  // Props go DOWN
  // Function propogations go BACK UP to the Original Component
  // use state returns back 2 variables
  // first one is the state ( under that name)
  // second one is a function that changes the said state
  const [list, setList] = useState(commentsData);
  
  const handleComment = (id, type) => {
    console.log("Hello from Line 46 in App.js");
    console.log("ID coming from Comment Component and it is:", id , type);
    // make a carbon copy of list state
    // const listCopy = [...list];
    // for (let index in listCopy) {
    //   if (id === listCopy[index].id) {
    //     console.log("FOUND THE CORRECT COMMENT");
    //     if (type === 'like')
    //       listCopy[index].likes++;
    //     else 
    //       listCopy[index].dislikes++;
    //   }
    // }
    // METHOD 2 the MAP WAY!
    const listCopy = list.map( item => {
      if (item.id === id) {
        if (type === 'like') item.likes++;
        else item.dislikes++;
      }
      return item;
    })


    setList(listCopy);
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <CommentList list={list} onClick={handleComment}/>
    </div>
  );
}

export default App;

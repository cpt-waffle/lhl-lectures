import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './Components/CommentList/CommentList';

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
  const [comments, setComments] = useState(commentsData);
  const handleComment = (id, type) => {
    console.log("IM HANDLING IT ON");
    console.log("LINE 43 in APP.js")
    console.log("the id came from Comment.js ==>", id);
    console.log(type);
    // make a copy of our state
    const commentsCopy = [...comments];
    // go through the copy and find the correct comment
    // (id)
      // for (let index in commentsCopy) {
      //   if (commentsCopy[index].id === id) {
      //     console.log("FOUND IT");
      //     // increment like/dislikes
      //     if (type === 'like')
      //       commentsCopy[index].likes++;
      //     else {
      //       commentsCopy[index].dislikes++;
      //     }
      //   }
      // }

    const commentIndex = commentsCopy.map(comment => comment.id).indexOf(id);
    if (type === 'like')
      commentsCopy[commentIndex].likes++;
    else 
    commentsCopy[commentIndex].dislikes++;
    setComments(commentsCopy);
    // set copy to original

  }
  
  return (
    <div>
      <h1>Hello World!</h1>
      <CommentList 
        list={comments}
        changeComment={handleComment}
      />
    </div>
  );
}

export default App;

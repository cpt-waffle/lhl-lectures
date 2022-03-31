import React, {useState, useEffect} from 'react';
import './card.css'

















const Card = (props) => {
  const [likes, setLikes] = useState(2);
  const [dislikes, setDislikes] = useState(4);

  // const [state, setState] = useState({likes: 2, dislikes: 4});
  useEffect(() => {
    console.log('render everytime anything changes!');
  })

  useEffect(() => {
    console.log("renders once.")
    setTimeout(() => {
      console.log(likes);
    }, 3000)
  }, []);

  useEffect(() => {
    console.log("likes changed, useEffect tracks it..")
    setTimeout(() => {
      console.log(likes);
    }, 1000)
  }, [likes]);

  // No days...
  // Monday Tues Wed


  const onLikesClick = () => {
    setLikes(prev => prev + 1); // async
  }


  return (<div className="card">
    <img className="card--img" src={props.img} alt="profile-pic"/>
    <h3>{props.name}</h3>
    <button onClick={onLikesClick}>Likes {likes}</button>
    <button onClick={() => setDislikes(prev => prev + 1)}>Dislikes {dislikes}</button>

  </div>
  )
}

export default Card;
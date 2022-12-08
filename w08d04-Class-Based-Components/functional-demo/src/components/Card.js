import React, { useState, useEffect } from 'react';
import './Card.css';



const Card = props => {

  const [likes, setLikes] = useState(4);
  const [dislikes, setDislikes] = useState(1);

  // useEffect(() => {
  //   // console.log("Runs EveryTime!");

  // })

  useEffect(() => {
    setTimeout(() => {
      console.log("LIKES", likes);
      console.log("DISLIKES", dislikes);
    }, 10000)
    console.log("Runs once, and never again");
  }, [])

  useEffect(() => {
    console.log("runs when dislikes has changed");
    console.log("dislikes",dislikes);
    console.log(likes);
  
  }, [dislikes])

  const onLikesClick = () => {
    setLikes(prev => prev + 1);
  }


  const {image, name, title} = props;
  return (
  <article className="card">
    <img
      src={image}
      className="card--img"
    />
    <h2>{name}</h2>
    <h3>{title}</h3>

    <div>
      <button 
      onClick={onLikesClick}>
        {likes} Likes
      </button>

      <button 
      onClick={() => setDislikes(prev => prev + 1)}>
        {dislikes} Dislikes
      </button>
    </div>
  </article>)
}







export default Card;
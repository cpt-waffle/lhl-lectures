
import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = props => {

  const [likes, setLikes] = useState(5);
  const [dislikes, setDislikes] = useState(5);

  // useEffect(() => {
  //   console.log("Run everytime anything changes!");
  // })

  useEffect(() => {
    console.log("Run one time, and never again")
    setTimeout(() => {
      console.log(likes);
    }, 10000);
  }, [])

  // useEffect(() => {
  //   console.log("Run first time and then anytime something in the array changes value");
  // }, [likes])
  // useEffect runs after the HTML gets added to the webpage... (after the paint has been commited)

  const onLikesClick = function() {
    setLikes(prev => prev + 1);
  }

  //useEffect very simular to lifecycle
  // but not actually the same thing



  const {name, title, img} = props;
  return (
    <article className='card'>
      <img 
        src={img}
        className='card--img'
      />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <button onClick={onLikesClick}>
        Likes {likes}
      </button>
      <button 
        onClick={() => setDislikes(prev => prev + 1)}
      >
        Dislikes {dislikes}
      </button>

    </article>
  )

}

export default Card;
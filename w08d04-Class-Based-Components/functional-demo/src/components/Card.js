import React, {useState, useEffect} from 'react';
import './Card.css';




const Card = props => {
  const [likes, setLikes] = useState(4);
  const [dislikes, setDislikes] = useState(4);

  // days         => spotsRemaining - 1
  // appointments =>
  // interviewers


  const onLikesButtonClick = () => {
    setLikes(prev => prev + 1);
  }

  const onDislikeButtonClick = () => {
    setDislikes(prev => prev + 1);
  }

  // useEffect(() => {
  //   console.log("everytime any state changes!")
  // })

  useEffect(() => {
    setTimeout(() => {
      console.log("likes", likes);
      console.log("dislikes", dislikes);
      setLikes(prev => {
        console.log("PREV likes", prev);
        return prev + 5;
      });
    }, 10000);
    console.log("once")
  }, [])

  // useEffect(() => {
  //   console.log(`when the value in 
  //   dependancy array changes`);
  // }, [dislikes])

  return (
    <article className="card">
      <img 
        className="card--img"
        src={props.image}
      />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <button onClick={onLikesButtonClick}>
        Likes {likes}
      </button>
      <button onClick={onDislikeButtonClick}>
        Dislikes {dislikes}
      </button>
    </article>
  )

}

export default Card;
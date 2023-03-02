// if we use old ver react we need this line otherwise its optional...
import React, {useState, useEffect} from 'react';
import './Card.css';






const Card = (props) => {
  //  [val, changeVal]
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  // useReducer()

  // useEffect(() => {
  //   console.log("on render, and every single time any re-render happens!");
  // }) // <-- no depedancy arrray

  // this runs right after elements are on the screen (painted)
  // screen flickering effect
  useEffect(() => {
    console.log("on render, and never again");
    setTimeout(() => {
      console.log("likes", likes);
      console.log("dislikes", dislikes);
    }, 2000)

  }, []) // <-- empty depedancy

  useEffect(() => {
    console.log("on render, and whenever the dislikes changes");
  }, [dislikes]) // <-- with dependancy

  /// props 
  /// useEffect(() => {
      //axios.get('/urls/:shortURL)
  // }, [props.shortURL])

  const onLikeClick = () => {

    setLikes(prev => prev + 1);

  }

  return (
    <article className="card">
      <img 
        className="card--img"
        src={props.image}
      />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <button onClick={onLikeClick}>
        Likes {likes}
      </button>
      <button onClick={() => 
        setDislikes(prev => prev + 1)}
      >
        Dislikes {dislikes}
        </button>

    </article>
  );
}

export default Card;
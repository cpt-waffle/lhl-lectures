import './Card.css';
import { useState } from 'react';

const Card = props => {

  const [likes, setLikes] = useState(3);
  const [dislikes, setDislikes] = useState(1);
  const [toggle, setToggle] = useState(true);

  const likesClick = () => {
    setLikes(likes + 1);
    props.globalClick();
  }

  const dislikesClick = () => {
    setDislikes(dislikes + 1);
    props.globalClick();
  }

  const onToggleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="card">
        <img className="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
        <h1 className="card--name">Mr Meows</h1>
        <h3 className="card--title">Lead Team Designer</h3>
      { toggle && <div>
        <button onClick={likesClick}>Like</button>
        <h4>{likes}</h4>
        <button onClick={dislikesClick}>Dislike</button>
        <h4>{dislikes}</h4>
      </div>
      }
      <button onClick={onToggleClick}>Hide</button>
    </div>
  );
}


export default Card;
import React, {useState} from 'react';
import Avatar from './Avatar';
import './Card.css';


const Card = (props) => {
  const [likes, setLikes] = useState(33);
  const [dislikes, setDislikes] = useState(3);

  const onLikesClick = () => {
    setLikes(likes + 1);
  }

  return (
    <div className='card'>
      <Avatar image={props.image}/>
      <h1>{props.name || 'Mr Woofs'}</h1>
      <h3>{props.title || 'Senior Tester'}</h3>
      <button onClick={onLikesClick}>Likes{likes}</button>
      <br/>
      <button onClick={() => setDislikes(dislikes + 1)}>Dislikes{dislikes}</button>

    </div>
  )

}

export default Card;

// app.get('/', (req, res) => {
    //pg.query()
//})
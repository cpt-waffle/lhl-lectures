import './Card.css';
import { useState } from 'react';  

// let likes = 1;

// react state hook
// --- just a variable, a way store data
// any data, arrays, objects, numbers, booleans, strings, 
// if you need to change the value/variable, you must do it by following the react rule 
// -- use the function that is provided to change the value

const Card = (props) => {
  // the function is provided to CHANGE the value of the state
  // you MUST USE THE PROVIDED FUNCTION TO CHANGE STATE
  // x - you MUST NEVER change state directly
  // x - whatisthis[0] = 3  <--------- WRONG DONT DO THIS

  // array destruction 
  // assign values from an array to variables in a one line
  const [likes, setLikes] = useState(2);
  const [dislikes, setDislikes] = useState(1);
  const [show, toggleShow] = useState(true);

  // Virtual Dom =  {}
  // event listeners
  const bananaFunction = () => {
    setLikes(likes + 1); // async
    props.setNum(props.num + 1);
  }

  const onDislikeClick = () => {
    props.setNum(props.num + 1);

    setDislikes(dislikes + 1); // async
  }

  const onToggle = () => {
    props.setNum(props.num + 1);
    toggleShow(!show);
  }

  return (
    <div>
      <h2>{props.num}</h2>
      {show ? (
        <div className="card">
          <img onMouseEnter ={() => console.log('drag enter')} className="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
          <h1 className="card--name">Mr Meows</h1>
          <h3 className="card--title">Lead Team Designer</h3>
          <button onClick={bananaFunction}>
            Like
          </button>
          <h4>{likes}</h4>
          <button onClick={onDislikeClick}>
            Dislikes
          </button>
          <h4>{dislikes}</h4>
          <button onClick={onToggle}>Hide</button>
        </div>
      ) : (
      <button onClick={onToggle}>Show</button>
      )}
    </div>
    )

}

export default Card;
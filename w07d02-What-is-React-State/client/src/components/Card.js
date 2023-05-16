import './Card.css';
// step1 importing state
import { useState } from 'react';

//   name, title, onTotalClick
const Card = props => {
  console.log("WE ARE RENDERING!");
  // step2 creating state
  // useState returns an array of 2 values [1,2]
  // first value in this array is the actual state
  // second value is a FUNCTION that you use to change the state!
  const [likes, setLikes] = useState(47);
  const [dislikes, setDislikes] = useState(2);
  const [showMetrics, setMetrics] = useState(true);
  // const number = whatIsThis[0]
  // const changeNumber = whatIsThis[1];

  // add an event listener
  // add a number to increment
  // whenever the event listener runs, increment the number
  
  // even though you are showing a variable
  // if you change that variable,
  // react won't re-render and show you that
  // change

// React State
// a variable, and a way to contain data
// the react state, can be a number, an array
// an object, etc
// Declaring a React State
  
  const someoneClickedMyButton = () => {
    console.log("clicked!!!");
    setLikes(likes + 1)
    props.onTotalClick();
    
  }

  const onDislikeClick = () => {
    setDislikes(dislikes + 1);
    setLikes(likes - 1)
  }

  const onMetricClick = () => {
    // !true = false
    // !false = true
    setMetrics(!showMetrics)
  }

  return (
    <div className="card">
      <img className="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
      <h1 className="card--name">{props.name}</h1>
      <h3 className="card--title">{props.title}</h3>
      <button onClick={onMetricClick}>Show Metrics</button>
      {showMetrics && <div>
        <button 
          onClick={someoneClickedMyButton}
        >
          Like
        </button>
        <h4>{likes}</h4>
        <button onClick={onDislikeClick}>
          Dislike
        </button>
        <h4>{dislikes}</h4>
      </div>
      }
    </div>
  )
}

export default Card;
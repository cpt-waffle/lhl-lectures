import './Card.css';
import {useState} from 'react';

const Card = (props) => {
  // state is a variable
  // number, boolean, string, array, object, null, undefined, etc
  // when state changes (in the right way...) it tells react to re-render the component

  // a state hook, useState();
  // [] <---- in js, you can only return one value, so state returns 2 with help of an array
  // [value, F() <--- that needs to be used to change the value of state]
  // never change state directly, but use the function provided by useState();
  const [value, setValue] = useState(0);
  // benefits of state?

  // how much state can you have?
  const [dislikes, setDislikes] = useState(2);
  // how does props play a role into this? 
  const [show, toggleShow] = useState(true);


  // event listener function

  const clicked = () => {
    console.log("it has been clicked!");
    setValue(value + 1);
    props.addOne();
  }

  const onDislikeClick = () => {
    setDislikes(dislikes + 1);
    props.addOne();
  }

  const onClickShow = () =>  {
    if (show) {
      toggleShow(false);
      props.addOne();
    } else {
      toggleShow(true);
      props.addOne();
    }
  }
  // $('').on('click', clicked);

  return (
    <div>
      <button onClick={onClickShow}>Hide</button>
      <h3>{props.counter}</h3>
      {show && 
        <div class="card">
        <img class="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
        <h1 class="card--name">Mr Meows</h1>
        <h3 class="card--title">Lead Team Designer</h3>
        <button onClick={clicked}>Like</button>
        <h4>{value}</h4>
        <button onClick={onDislikeClick}>Dislike </button>
        <h4>{dislikes}</h4>
      </div>
      }


    </div>
  );
}

export default Card;


// virtualDom = {
  //...
  // card: {div: '', h1: '', ....  button: 100};
//}
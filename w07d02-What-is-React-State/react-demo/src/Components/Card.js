import './Card.css';
import {useState} from 'react';

//  React State 

const Card = (props) => {

  // [ ]
  // the first value of the array is the value we pass as the parameter
  const [num, setNum] = useState(2); // returns[v, f()] 
  const [dislikes, setDislikes] = useState(1);
  // const num = whatAreYou[0];
  // const setNum = whatAreYou[1];
  // the second value is a function that changes the first value <---
  // when you use the function to change the state...

  // changeState = v => {
    // state = v;
    // reRenderMyComponentButEfficiently()
  // }


  const someoneClickedMyButton = () => {
    // num = 
    // ^--- NEVER CHANGE STATE DIRECTLY
    setNum(num + 1);
    props.addOne();
    console.log('pressed!');
  }

  const onDislikeClick = () => {
    props.addOne();
    setDislikes(dislikes + 1);
  }
  // Virtual DOM

  // const a = <h1>Hello World</h1>;

  // console.log(a);

  // const virtualDOM = {
  //   img0238940925: { children: '', src: '', className: ''},
  //   h1904350945: {},
  //   // ...              3
  //   h42349234: {text: num}
  // }

  // DOM 
  console.log("RE-Render!");

  return (
    <div className="card">
      <img className="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
      <h1 className="card--name">Mr Meows {props.num}</h1>
      <h3 className="card--title">Lead Team Designer</h3>
      <button onClick={someoneClickedMyButton}>Like</button>
      <h4>{num}</h4>
      <button onClick={onDislikeClick}>Dislikes</button>
      <h4>{dislikes}</h4>
    </div>
  )
}

export default Card;
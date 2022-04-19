import React, {useState} from 'react';
// to import css:
import './profilebox.css';

// Fragment ?? -- container, just like a div, but IT CANNOT HAVE ANY CSS 
const Profilebox = (props) => {
  console.log("---------------->", props);
  let number = 1;
  const [num, setNum] = useState(1);
  // num = 1;
  // setNum (arg) => num = arg; // HEY REACT !! RE-RENDER THIS COMPONENT! 

  const addNum = () => {
    console.log("Does it work?");
    setNum(num + 1);
  }
  // $(document).on('ready', () => {
    // $('#button_id').on('click', () => {})
  // })
  const name = 1223
  return (
    <div className='profile'>
      <img className="profile--img" src={props.img}/>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <h1>Number is {num}</h1>
      <button onClick={addNum}>Click me!</button>
    </div>
  )
}

export default Profilebox;
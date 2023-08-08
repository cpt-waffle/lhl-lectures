// how to get state into a component
import {useState} from 'react';
// hook 
const Card = props => {
  console.log("RE_RENDERING!@!!!!")
  // use state returns an array, 
  // array has 2 values

  // its a way to re-render the component and show the changes that were effected
  // before the re-render

  // and what we pass in useState('') <-- will set the first value to it 
  const [num,setNum] = useState(6); 
  const [dislikes, setDislikes] = useState(8);
  // NEVER CHANGE STATE DIRECTLY
  // num++ == wrong
  // num = num + 1 == wrong

  // state function ---> f(val)  {
    // if (!state !== val)
     // state = val;
    // reRenderThisComponent();
  // }

  // state
  // -- a variable
  // const addOneToArray = (arr) => {
  //   arr.push(1);
  // }
  

  const someoneClickedMyButton = () => {
    console.log('we clicked a button!!!');
    const result = num + 1;
    props.eventForEverything();
    // immutability -- never change a value of a reference
    // always change a copy 
    setNum(num + 1);
  }

  const onDislikeClick = () => {
    setDislikes(dislikes + 1);
    props.eventForEverything();
  }
//  virtualDOM = {
    // 1-4935893045Navbar: {
      // children: {
        // nav: {.....}
      // }
    // }
    // Card: {
    // children: {
        // h2-32489525: {value: 5}
    // }
    // }
// }

  return (
    <div className="card">
      <img className="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
      <h1 className="card--name">Mr Meows</h1>
      <h3 className="card--title">Lead Team Designer</h3>
      <button onClick={someoneClickedMyButton}>Like</button>
      <h4 id="likes-count">{num}</h4>
      <button onClick={onDislikeClick}>Dislike</button>
      <h4>{dislikes}</h4>
    </div>
  );
}

export default Card;
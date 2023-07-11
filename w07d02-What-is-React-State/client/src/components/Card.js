import './Card.css';
import {useState} from 'react';

// Adding state to a component
// (useState) Hooks!

const Card = (props) => {
  console.log(props);
  // useState needs to return 2 things from it
  //  JS can only RETURN 1 VALUE
  // useState returns an array with 2 values in it!

  // First Value = is your state (where your initial
  // value lives)

  // 2nd Value = F() --> the function that NEEDS to
  // be used to CHANGE THE STATE!

  //    [4, f()]
  // const whatStateReturns = useState(4);
  // const likesNum = whatStateReturns[0];
  // const changeLikesNum = whatStateReturns[1];
  // Array Destruction
  const [likesNum, changeLikesNum] = useState(4);
  const [dislikesNum, changeDislikeNum] = useState(1);
  
  // const [stateObj, changeStateObj] = useState({
  //   likes: 4,
  //   dislikes: 1
  // })
  
  // useReducer()
  
  
  // STATE
  // when state changes (the right way),
  // the entire component will re-run/re-render
  // showing the change for the user
  // how to add an event listener in react
  // 1) make a function, inside of your component
  const banana = () => {
    console.log("this is bananas!");
    changeLikesNum(likesNum + 1)
    props.coconut();
    // we must tell react to re-render :)
    // $('#likes-count').val(likesNumber)
  }

  const onDislikesClick = () => {
    changeDislikeNum(dislikesNum + 1);
    props.coconut();
  }

  // 2) attaching the function to a specific HTML element on a specific event
  // how to change the value visually for the user


  // virtualDOM
  // virtual = {
    // div5234134: {children: {
        // img234234: {...}
        // h15235235: {...}
        // h3324wr23: {...}
        // button4234: {
            // children: "Like"
            // onClick: f() => banana
        // }
        // h43423424: {
          // class: 'card'
          // references: ''
          // children: likesNumState 3 => 4
          // value: 4
        // }
        
    // },
  // }
  // }


  return (
    <div class="card">
      <img class="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
      <h1 class="card--name">Mr Meows</h1>
      <h3 class="card--title">Lead Team Designer</h3>
      <button id="likes-btn" onClick={banana}>
        Like
      </button>
      <h4 id="likes-count">{likesNum}</h4>
      <button onClick={onDislikesClick}>
        Dislike
      </button>
      <h4>{dislikesNum}</h4>
    </div>
  );
}

export default Card;
import './App.css';
import {useState} from 'react';
import CartItem from './Components/CartItem';

let i = 0;

function App() {
  const [array, setArray] = useState([]);
  const [obj, setObj] = useState({});
  const [state, setState] = useState({array: [], obj: {}}) // <--- useReducer()
  // -- When should would we OR should we ever connect states toghether into 1 state?

  const addANumberToArray = () => {
    // BAD PRACTICE!!
    // array.push(i); // [1,2,3,4]
    // i++;
    // console.log(array)
    // setArray(array); // should work?~
    // ----------------------------------
    setState({...state, array: [...state.array, i++]});
  }

  const addItemToCart = () => {
    const item = 'toilet paper';
    const objCopy = {...state.obj};
    objCopy[i] = item;
    i++;
    setState({...state, obj: objCopy})
    // [Object object]
  }

  let cartItemArr = [];
  for (let key in state.obj) {
    cartItemArr.push(<CartItem num={key} name={state.obj[key]}/>)
  }
  //  -----
  const cartItemArr2 = Object.keys(state.obj).map(key => <CartItem num={key} name={state.obj[key]} banana={addItemToCart}/>) 


  // $('#iasdasd').on('click', addItemToCart())
  return (
    <div className="App">
      <h2>Array {state.array}</h2>
      <button onClick={addANumberToArray}>Add a number to the array</button>
      {cartItemArr2}
      <button onClick={addItemToCart}>Add Toilet Paper</button>
    </div>
  );
}

export default App;

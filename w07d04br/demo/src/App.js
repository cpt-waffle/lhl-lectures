import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'


function App() {
  const [state, setState] = useState({
    fruitList: {
      a: 'apple',
      b: 'pair',
      c: 'banana',
      d: 'watermelon',
      e: 'orange'
    },
    cart: [
      'a', 'a', 'b', 'c', 'd', 'e' 
    ],
    numbers: 6
  })




  //getAppointmentsForDay
  const showFruitList = (obj) => {
    const arr = [];
    for (let item of Object.values(obj)) {
      arr.push(<li>{item}</li>)
    }

    return arr;
  }

  const getFruitForCart = (state, cart) => {
    // console.log(state);
    // console.log(cart);
    // how do i grab a specific key from an object;
    const cartFruit = cart.map( key => {
      return state.fruitList[key];
    })
    // console.log(cartFruit);
    return cartFruit;
  }


  const tempCart = getFruitForCart(state, state.cart);
  const renderCart = tempCart.map(item  => {
    return <h1>{item}</h1>
  })

  const subtractItem = () => {
    // const stateCopy = {...state, numbers: state.numbers - 1, cart: [...state.cart.slice(0, state.cart.length - 1)]}
    setState(prev => {
      return {...prev, numbers: prev.numbers - 1, cart: [...prev.cart.slice(0, prev.cart.length - 1)]}
    });
    // setState(prev => {
    //   return {...prev, numbers: prev.numbers - 1, cart: [...prev.cart.slice(0, prev.cart.length - 1)]}
    // });
    // setState(prev => {
    //   return {...prev, numbers: prev.numbers - 1, cart: [...prev.cart.slice(0, prev.cart.length - 1)]}
    // });
    // when working with STATE (any primative or object, or array) UNLESS YOU ARE SETTING A 
    // A BRAND NEW INSTANCE you should always prev 
  }

  useEffect(() => {
    console.log('hello world')
  }, []) 

  useEffect(() => {
    console.log('RENDER!!')
  }) 

  const [num, setNum] = useState(1)

  useEffect(() => {
    console.log(num);
    // Promise.all(axios axios axios)
    axios.get('http://www.google.ca').then(data => {
      console.log(data);
    })
    // setNum(prev => prev + 1);
  }, [num])


  return (
    <div className="App">
      <h2>{state.numbers}</h2>
      <button onClick={subtractItem}>subtract item</button>
      <button onClick={() => setNum(prev => prev + 1)}>NUM BUTTON</button>

      <h1>Fruit List</h1>
      {showFruitList(state.fruitList)}
      <h2>Cart</h2> 
      {renderCart}
    </div>
  );
}

export default App;

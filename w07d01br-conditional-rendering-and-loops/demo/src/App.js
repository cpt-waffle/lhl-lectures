import './App.css';
import Circle from './Circle'

function App() {
  const array = [1,2,3,4,5] // AS LONG AS THEIR PRIMATIVE TYPES
  const cart = [{item: 'Milk'}, {item: 'Cookies'}, {item: 'Chips'}];
  const greetings = ['hi', 'hello', 'good morning', 'good bye'];
 
  const renderArray = [];

  // for (let item in cart) {
  //   console.log(cart[item].item)
  //   renderArray.push(<li>{cart[item].item}</li>)
  // }
 
  // cart.forEach((item, index, arr) => {
  //   renderArray.push(<li> ----> {item.item}</li>)
  // })

  const mapArr = cart.map((item) => {
    return <li>map way -->{item.item}</li>
  })
  // mapArr = []
  // loop through the elements
  // watever the callback returns, gets pushed into the
  // maps arr

  const circles = greetings.map(e => {
    return <Circle name={e}/>
  })

  return (
    <div className="App">
      <Circle name={"hello"}/>
      {circles}
    </div>
  );
}

export default App;

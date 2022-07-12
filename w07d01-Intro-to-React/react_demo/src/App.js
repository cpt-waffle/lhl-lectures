import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card';

function App() {
  // this a JS file...
  // it returns HTML ?!
  let x = 3;
  let y = 4;




  return (
    <div className="App">
      {/* Navbar({a:'hello', b: x}) */}
      <Navbar a="hello" b={x} title={'LinkedIn but not real!'} c={33}/>
      <Navbar a="hello" b={x} title={'Wierd Cat Company'} c={33}/>

      <Card name={"Mr Meows"} title={"Lead Team Designer"} imgURL={'https://i.redd.it/7k24xova0ya11.jpg'}/>
    </div>
  );
}

export default App;
//module.exports
//module.exports = { default: App }

// Components
// a part of a UI
// split into different peices, for re-usability
// "if i can draw a box around it, thats going to be a component"

// PROPS <-------------------
// Navbar(x,y,z)
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Box from './components/Box';
import Footer from './components/Footer';

// function 
// a JS file?
//class in HTML but Line 9 sasys CLASSNAME!!?!!   WTH?!


// Back in Express to combat that problem
// we made EJS templates
// header <------- 
// urls 

// Components!!
// a component is .......
//  a feature 
// a re-useable of code
// a peice of html
// a peice of html delivered to app.js

// Mr Meows
// Lead Team Designer
// 4

// Doggo
// Lead Designer
// 2

//  PROPS (properties)
//  parameters

//////////////
// Navbar()
// Profile('Mr Meows', ' Lead Team Designer', 4) 
// Profile('Mr Meows', ' Lead Team Designer', 4) 
// Profile('Mr Meows', ' Lead Team Designer', 4) 

// Midterms

// i want to build the navbar drop down menu to show me orders of food that ive added into my cart...

const name = 'Doggo'
const title = 'Lead Designer'
const likes = 22;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile name="Mr Meows" title={'Lead Team Designer'} likesCount={4} />
      <Profile name={name} title={title} likesCount={likes} banana={false}/>
      <Footer/>
    </div>
  );
}

export default App;

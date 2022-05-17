import logo from './logo.svg';
import './App.css';
///////////////// IMPORTING a component ///////////////////
import Navbar from './components/Navbar';
import Profile, { Hello } from './components/Profile';
import NavSecondary from './components/NavSecondary';

//  react does throw html errors 
// whatever the functions return ( html )
//  it must return everything WRAPPED in one parent !

// APP.js IS your root part of application
// whatever is here, will be rendered on the webpage!

// how do you use react with multi page apps?


// Components !!!!
// EJS template  <--- Navbar, Footer, etc
// a reusable chunk of UI
// Steps to create a component are:

// 1 -- make a file inside of src/components
// 2 -- name the file the same NAME as the component you are going to make (Capitalize)

/// Navbar();
function App() {
  return (
  <div>
    <Navbar/>
    <Hello/>
    <NavSecondary/>
    <Profile img={'https://i.redd.it/7k24xova0ya11.jpg'} name={'Mr Meows'} title={'Lead Team Designer'}/>
    <Profile img={'https://i.pinimg.com/736x/bc/63/9a/bc639a8b3b3a3047b8b40c11adab5f12--coastal-christmas-merry-christmas.jpg'} name={'Ms Woof'} title={'Head of Barkitechture '}/>
    <Profile img={""} title="No Title" name="No Name"/>
  </div>
  );
}

export default App;

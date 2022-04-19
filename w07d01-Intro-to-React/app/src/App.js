import './App.css';
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Profilebox from './components/Profilebox';
import NewNavBar from './components/NewNavBar';

// ejs
// navbar.ejs <-------------------------- partial ? ===> 
// Components -- a re-usable, modular file, that contains html, js. 
// index.ejs
// new.ejs
// edit.ejs

// uppercase letter first, and we're naming it exactly what this file will represent


//  what are properties
// const foo = (type: a,make: b,name: c,d,etc...) => { ... }

// layout for logged in?
// seeing items, on the page when you added the items

// Storybook
// to make components NOT in APP.js, but in isolation, and once were are done making it, 
// then we can add it safely to app.js
// ------ STORYBOOK IS NOOOOOOOOOOOOOOOOT REACT
function App() {
  return (
    <div className="App">
      <NewNavBar menuItems={['Home', 'Logout', 'About Us']}/> 
      <Profilebox name="Mr Buttons" title="aaa" img="https://i.redd.it/7k24xova0ya11.jpg" sin="234824582"/>
      <Profilebox name="Green guy" title="Assosiate Manager" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8uvxjAfsI-m1SqwH95m3e0PMHHZJZJWVkMgaRg6606bYmSWOgxj_uuB2chnQJ2Ykgt2s&usqp=CAU" sin="1111111"/>
      <Profilebox name="Moon Moon" title="Derp Assosiate" img="https://i.pinimg.com/originals/d9/a0/9f/d9a09f13f28090b40d97f212ee392681.jpg" sin="453636367"/>
    </div>
  );
}

export default App;

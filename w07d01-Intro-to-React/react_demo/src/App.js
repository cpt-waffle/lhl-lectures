import logo from './logo.svg';
import './App.css';
// rule 4 -- import the component
import Navbar from './components/Navbar';
import Profile from './components/Profile';


function App() {
  // your react functions
  // must return one HTML parent element!

  // <%= %> ---- { }   
  const a = 3.14;
  const b = 'Welcome to my page';
  return (
    <div>
      {/* {  Navbar({a, item1: 'HOME', item2: 'LOGIN'})  } */}
      <Navbar a={a} homeLink={'HOME'} loginLink={'LOGIN'}/>
      <Profile image={'https://i.redd.it/7k24xova0ya11.jpg'} name={'Mr Meows'} title={'Lead Team Designer'}/>
    </div>
  );
}

export default App;

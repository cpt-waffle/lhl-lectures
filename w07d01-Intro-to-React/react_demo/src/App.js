import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';

function App() {
  const navTitle = 'Excellent Navbar';
  return (
    <div className="App">
    <Navigation title={navTitle} primary children={3.14}>
    </Navigation>
    
    {/* {Navigation({a:1, b:2, c:3, title: 'hello world'})} */}
    <Profile picture={'https://i.redd.it/7k24xova0ya11.jpg'} position="Lead Team Designer" name="Mr Meows"/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';


// your functions that return HTML
// must return ONE parent HTML element

// make sure to close your HTML correcty, 
// because react REALLY cares about syntax of HTML


// Components -- what are they?
function App() {
  return (
    <div className="App">

      <Navbar menuItems={['Login', 'Register', 'Menu']} PI={3.14}/>
      <Card 
      image={'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg'}
      title={'CTO'}
      name={'Mr G'}
    />
    <Card/>
    </div>
  );
}

export default App;

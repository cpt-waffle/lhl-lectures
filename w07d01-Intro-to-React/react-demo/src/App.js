import logo from './logo.svg';
import './App.css';
//const Navbar =  require('./components/Navbar')
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Card name={'hello'} title={'world'}/>
    </div>
  );
}

export default App;

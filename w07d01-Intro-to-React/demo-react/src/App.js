import './App.css';
// to use a component that ive build, i will need to IMPORT
import Navbar from './components/Navbar';
import Profile from './components/Profile';

// jsx syntax
// javascript and xml
// "you got html in your javascript" - Vas

function App() {

  // Profile(name, title, img)
  return (
    <div className="App">
      <Navbar title="Crazy Title Navbar Change"/>
      <Profile name="Mr Meows" title="Human Security Coordinator" img="https://i.redd.it/6xvh1f7btgl31.jpg"/>
      <Profile name="Fluffers" title="Senior Nap Specialist" img="https://i.redd.it/7k24xova0ya11.jpg"/>
      <Profile name="Floofers" title="Senior Intranet Executive" img="https://www.boredpanda.com/blog/wp-content/uploads/2021/11/618e14ec7b031_fndyxj23tku71__700.jpg"/>
      <Profile name="Steward von Balphazar" title="District Program Orchestrator" img="https://i.imgur.com/DSCvjeO.jpg"/>
    </div>
  );
}

export default App;

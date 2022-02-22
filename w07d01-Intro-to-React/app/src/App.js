import Navbar from './components/Navbar';
import Card from './components/Card';
import ColorBox from './components/ColorBox';
import './App.css';

// App.js will be your MAIN FILE
// this is your application in a nutshell!

function App() {
  ////////////////////////////////////////////////

   // Building a Component  [x]
   // Pass Props            [x]
   // State manipulation    [x]

  ////////////////////////////////////////////////


  // Components 
  //  < Component /> 
  //  <% include navbar.ejs %>
  //  urls_index.ejs <------------------- navbar

   // PROPS
   // if parameters are arguments for a function
   // props are arguments for a component

  //  Navbar('hello world', 12, 'cats', false)
  const title1 = 'Vagrant';
  const title2 = 'Props :)';
  const title3 = 'CATS (^-_-^)~';

  // STORYBOOK IS NOT REACT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // STORYBOOK IS A TOOL THAT CAN ATTACH TO REACT,ANGULAR,VUE,ETC

  return (
    <div className="App">
      <Navbar title={title1} fruit="apple" number={1} />
      <ColorBox title="WELCOME" color={"blue"}/>
      <Card name={"Ariya Brady"} img="" title={"Direct Ideation Specialist"}/>
      <Card name={"Bo Mayo"} title={"Dynamic Response Synergist"} img=""/>
      <Card name={"Dua Sellers"} img="" title={"Senior Directives Administrator"}/>
      <Card name={"Mr Meows"} img="" title={"Cat Expert Designer"}/>
    </div>
  );
}

export default App;

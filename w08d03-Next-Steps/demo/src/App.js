import logo from './logo.svg';
import './App.css';
// imports for pages below
import Home from './pages/Home';
import Memes from './pages/Memes';
//
import { GlobalContextProvider } from './context/GlobalContext';


import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
       <GlobalContextProvider>
          <Route path="/memes">
            <Memes/>
          </Route>
          <Route path="/contact">
            <h3>Contact US</h3>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </GlobalContextProvider>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Pictures from './pages/Pictures';
import Contact from './pages/Contact';
import {GlobalContextProvider} from './context/GlobalContext';

// Get me information of the logged in user....



function App() {
  return (
    <div className="App">
      <Router>
        <ul className="navbar">
          <li className="item"><Link to="/">Home</Link></li>
          <li className="item"><Link to="/about">About</Link></li>
          <li className="item"><Link to="/memes">Pictures</Link></li>
          <li className="item"><Link to="/contact">Contact Us</Link></li>
        </ul>
        <GlobalContextProvider>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/memes">
              <Pictures/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </GlobalContextProvider>
      </Router>
    </div>
  );
}

export default App;

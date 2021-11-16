import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card/'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './pages/Homepage';
import CatsPage from './pages/CatsPage';
import DogsPage from './pages/DogsPage';
// APPS
// app is like a program
// WEBSITES
// -- scraped

// scraper bots ping your website....
// they get info to google, and google decides where to put you in its search number
function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/"> HomePage </Link>
          <Link to="/cats"> Cats Page </Link>
          <Link to="/dogs"> Dogs Page </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path='/cats'>
            <CatsPage/>
          </Route>
          <Route path='/dogs'>
            <DogsPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

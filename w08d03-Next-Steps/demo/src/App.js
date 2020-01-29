import React from 'react';
import Profile from './Components/Profile'
import Example from './Components/Example'
import HomePage from './Pages/HomePage'
import Photo from './Pages/PhotoPage'

import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Terrible One lines at a bar App!!!!!</h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/Example">Example</Link>
        <Link to="/photo">Photo Page</Link>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/example">
            <Example/>
          </Route>
          <Route path="/photo">
            <Photo/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Dogs from './Pages/Dogs';
import Cats from './Pages/Cats';
import { GlobalContextProvider } from './Context/GlobalContext';



export default () => {
  return (
    <Router>
      <nav>
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/dogs">Dogs</Link>
        <Link className="item" to="/cats">Cats</Link>
      </nav>
      <GlobalContextProvider>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/dogs">
            <Dogs/>
          </Route>
          <Route path="/cats">
            <Cats/>
          </Route>
        </Switch>
      </GlobalContextProvider>
    </Router>
  );
}


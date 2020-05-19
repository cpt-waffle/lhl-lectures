import React from 'react';
import Dogs from './Pages/Dogs';
import Home from './Pages/Home';
import Cats from './Pages/Cats';
import { GlobalContextProvider } from './Context/GlobalContext';

import './App.css';

// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// STEP 3 wrapping of Provider -- Wrap all the components you want to share the state(context) with
function App() {
  return (
    <Router>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/dogs">Dogs</Link>
          <Link to="/cats">Cats</Link>
      </nav>
      <GlobalContextProvider>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/dogs'>
            <Dogs/>
          </Route>
          <Route path='/cats'>
            <Cats/>
          </Route>
        </Switch>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;

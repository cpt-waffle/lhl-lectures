import React from 'react';
import './App.css';
import Cats from './Components/Cats';
import DogPage from './Pages/DogPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {GlobalContextProvider} from './Context/GlobalContext';

function App() {
  return (
    <Router>
      <span>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/cats">Look at some Cats</Link>
        <Link className='link' to="/dogs">Look at some Dogs</Link>
      </span>
      <div className="App">
        <Switch>
          
          <GlobalContextProvider>
            <Route exact path='/'>
              <h2>This is home page</h2>
            </Route>
            <Route path="/cats"> 
              <Cats/>
            </Route>
            <Route path="/dogs">
              <DogPage/>
            </Route>
          </GlobalContextProvider>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

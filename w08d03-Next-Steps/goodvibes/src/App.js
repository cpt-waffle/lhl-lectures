import React from 'react';
import Vibe from './components/Vibe';
import './App.css'
import { GlobalContextProvider } from './context/GlobalContext';
import CatPage from './pages/CatPage';
import DogPage from './pages/DogPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const goodDogVibes = [
  {
    id: 'd1',
    name: 'Wholesome Dog',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkh0bQOH9odhoJ7HKsUaYHt0iG8Jo_dEdrig&usqp=CAU'
  },
  {
    id: 'd2',
    name: 'Dog faces',
    img: 'https://i.pinimg.com/originals/cf/69/26/cf6926a644de241f10fe79644f080cd9.jpg'
  },
  {
    id: 'd3',
    name: "Sandeep's Image",
    img: 'https://i.imgflip.com/488dgb.jpg ',
  },
  {
    id: 'd4',
    name: 'o_o',
    img: 'https://i.redd.it/g9vbw4uw2o221.jpg'
  },
  {
    id: 'd5',
    name: '408',
    img: 'https://httpstatusdogs.com/img/408.jpg'
  }
];

const goodCatVibes = [
  {
    id: 'c1',
    name: 'Cat',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3QYGtRyngpDfgOir5zvSeRYUr-z9qJGF5PA&usqp=CAU '
  },
  {
    id: 'c2',
    name: 'another cat',
    img: 'data:image/jpeg;base64,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'
  },
  {
    id: 'c3',
    name: 'Draw me like you draw your ...',
    img: 'https://i.pinimg.com/originals/18/69/f3/1869f3fc3dfc0bb09bc64ebb116e00cd.jpg',
  }
];

function App() {
  return (
    <Router>
      <h1>Good Vibes!!</h1>
      <div>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/dogs">Dog Page</Link>
        </li>
        <li>
          <Link to="/cats">Cat Page</Link>
        </li>
      </div>
      <GlobalContextProvider>
        <Route exact path="/">
          <h2>THIS IS JUST A PAGE WITH NOTHING IT IT I HARDCODED IT</h2>
        </Route>
        <Route path="/cats">
          <CatPage vibes={goodCatVibes}/>
        </Route>
        <Route path="/dogs">
          <DogPage vibes={goodDogVibes}/>
        </Route>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;

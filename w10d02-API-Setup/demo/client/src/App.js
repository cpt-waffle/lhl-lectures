import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card'
import DogHome from './pages/dogs';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



function App() {

  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:3002/dogs').then(res => {
      console.log("Response has comeback!");
      console.log(res);
      setDogs(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/cats').then(res => {
      console.log("Response has comeback!");
      console.log(res);
      setCats(res.data);
    });
  }, []);

  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Dogs" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Cats" onClick={() => console.log("HELLOW")} />
          </ListItem>
          <Divider light />
        </List>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dogs">Dogs</Link>
          </li>
          <li>
            <Link to="/cats">cats</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/dogs">
            <DogHome dogs={dogs}/>
          </Route>
          <Route path="/cats">
            <h1>Cats :)</h1>
            {cats.length < 0 ? <h1>Loading....</h1> : cats.map((cat,i) => <Card key={i} img={cat.img} name={cat.name}/>)}
          </Route>
          <Route path="/">
            <h1>This is my home!!</h1>
          </Route>
        </Switch>
     
      </Router>
    </div>
  );
}

export default App;

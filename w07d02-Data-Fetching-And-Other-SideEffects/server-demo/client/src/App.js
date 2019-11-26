import React, {useEffect, useState, Fragment } from 'react';
import './App.css';

import axios from 'axios' // <-- fetch wrapper ;
import Profile from './Profile';

function App() {
  const [profiles, setProfiles] = useState([]);
  useEffect( () => {
    // LOOK into Promise.all <<--------
    console.log("Ready to go!");
    axios.get('http://localhost:3001/').then(res => {
      // console.log(res.data.data);
      setProfiles(res.data.data)
    })
  }, [])

  return (
    <Fragment>
      { profiles.length > 0 ?
        profiles.map( (info, key) => <Profile key={key} profile={info.profile}>{info.name}</Profile> )
        : <h2>Loading.......</h2>
      }
    </Fragment>
  );
}

export default App;

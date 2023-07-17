import './App.css';
// import axios

import Poster from './components/Poster';
import PosterList from './components/PosterList';
import useApplication from './hooks/useApplication';

// side-effects



function App() {
  const {numbers, posters, onGetDataBtn} = useApplication();

  return (
    <div className="App">
      <h1>Data Fetching and Side Effects!</h1>
      {numbers.length ? 
      <ul>
        {numbers.map(n => <li key={n}>{n}</li>)}
      </ul>
       : <h2>no numbers yet :(</h2>}
      <button onClick={onGetDataBtn}>Get me Data!</button>
      <Poster img={'https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg'} title={'hello world'}/>
      {/* {posters.map( poster => <Poster key={poster.id} img={poster.url} title={poster.name}/>)} */}
      {/*  Poster({img: , title:}) */}
      <PosterList posters={posters}/>
    </div>
  );
}

export default App;

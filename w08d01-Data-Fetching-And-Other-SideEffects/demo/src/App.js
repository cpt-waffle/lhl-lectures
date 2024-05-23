import './App.css';
import Poster from './components/Poster';
import PosterList from './components/PosterList';
import useApp from './hooks/useApp';


// side-effects


function App() {
  const {getTestData, setNumber, num, posters, array} = useApp();

  return (
    <div className="App">
      <h1>Data Fetching and Other Side Effects</h1>
      <button onClick={getTestData}>Fetch Test Data</button>
      <button onClick={() => setNumber(num + 1)}><h1>{num}</h1></button>
      <h2>Array: {array}</h2>
      {posters.length ? 
        <div>
          <PosterList posters={posters}/>
        </div> 
        : 
        <div>
          <h2>Loading Posters...</h2>
          
        </div>
      }
    </div>
  );
}

export default App;

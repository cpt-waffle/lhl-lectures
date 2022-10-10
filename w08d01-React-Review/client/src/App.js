import './App.css';
import MemeList from './components/MemeList';
import Form from './components/Form'
import useApplication from './hooks/useApplication';

function App() {
  const {memes, addMeme} = useApplication();



  return (
    <div className="App">
      <h1>Meme Demo App!</h1>
      <Form addMeme={addMeme}/>
      {memes.length ? <MemeList list={memes}/> : <h2>Loading...</h2>}
    </div>
  );
}

export default App;

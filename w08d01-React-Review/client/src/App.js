import './App.css';
// Demotivational Posters Meme App
import DemoPosterList from './components/DemoPosterList';
import Form from './components/Form';
import useApplication from './hooks/useApplication';

function App() {
  const {demoPosters, addPoster} = useApplication();

  return (
    <div className="App">
      <h1>Meme Demo App!</h1>
      <Form addPoster={addPoster}/>
      <DemoPosterList list={demoPosters}/>
    </div>
  );
}

export default App;

import './App.css';
import Memelist from './components/Memelist';
import Form from './components/Form';
import useApp from './hooks/useApp';


// state (useState)
// useEffect (sideeffects)
// axios (fetch but not really...)

function App() {
  const {memes, onSubmit} = useApp();

  return (
    <div className="App">
      <Form onSubmit={onSubmit}/>
      <Memelist list={memes}/>
    </div>
  );
}

export default App;

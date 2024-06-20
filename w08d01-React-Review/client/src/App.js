import './App.css';
import Note from './components/Note';
import NotesList from './components/NotesList';
import Form from './components/Form';
import useApplication from './hooks/useApplication';

// state is a special react variable
// when it changes a certain way, the component (and all other components that take that state)
// will re-render!

function App() {
  const {notes, onFormSubmit} = useApplication();

  return (
    <div className="App">
      <h1>Notes App</h1>
      <Form onFormSubmit={onFormSubmit}/>
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;

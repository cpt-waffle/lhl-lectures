import Note from "./Note";

// pass all the notes into props
const NotesList = (props) => {
  return (<div>
    {props.notes.map(note => <Note key={note?.id}title={note?.title}>{note?.note}</Note>).reverse()}  
  </div>)
}

export default NotesList;
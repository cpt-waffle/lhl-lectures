import './Form.css';
import { useState } from 'react';

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const onTitleChange = evt => {
    setTitle(evt.target.value);
  }

  const onNoteChange = evt => {
    setNote(evt.target.value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.onFormSubmit({title, note});
  }

  return (
  <form className='form' onSubmit={onSubmit}>
    <h1>Add a Note</h1>

    <div className='form-body'>
      <input type="text" name="title" value={title} onChange={onTitleChange}/>
      <textarea name="note" value={note} onChange={onNoteChange}/>
    </div>

    <button>Send</button>
  </form>)
}

export default Form;
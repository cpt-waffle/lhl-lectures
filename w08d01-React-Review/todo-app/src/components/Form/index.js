import React, {useState} from 'react';
import './index.css';

const Form = props => {
  // we need to collect information that user types
  // we need to send that information to the right component that has that the state
  const [input, setInput] = useState('');

  const onInputChange = (evt) => {
    setInput(evt.target.value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.onFormSubmit(input);
  }

  return (
    <form className='item-form' onSubmit={onSubmit}>
      <input 
        className='item-form--input' 
        type="text" 
        name="newItem"
        value={input}
        onChange={onInputChange}
      />
      <button className='item-form--button'>Add New Item!</button>
    </form>
  )
}

export default Form;
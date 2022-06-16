import React, { useState } from 'react';
import './Form.css'

const Form = () => {
  const [name, setName] = useState('aaaa');
  const [url, setURL] = useState('bbbbb');

  const onChangeName = (evt) => {
    console.log("name input is changing")
    setName(evt.target.value);
  }

  return (<form className='form'>
    <p>Add meme name:<input type='text' value={name} onChange={ onChangeName }/></p>
    <p>Add meme url :<input type='text' value={url}  onChange={(evt) => setURL(evt.target.value) }/></p>
    <button>Add meme!!!</button>
  </form>)

}

export default Form;
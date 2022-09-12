import { useState } from 'react';
import './Form.css';
import useForm from '../hooks/useForm';

const Form = props => {
  // collect the values of the input fields
  const title = useForm(); // a new instance of that object
  const url = useForm();

  console.log(title);
  console.log(url);

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.addMeme(title.val, url.val)
  } 


  return (<form onSubmit={onSubmit}>
    <p>Title:<input type="text" name='title' value={title.val} onChange={title.onChange}/><button onClick={title.clear}>clear</button></p>
    <p>URL:<input type="text" name='url' value={url.value} onChange={url.onChange}/></p>
    <button>Sumbit!</button>
  </form>)
}

export default Form;
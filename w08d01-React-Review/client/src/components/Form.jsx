import React, {useState} from 'react';

const Form = (props) => {
  const [input, setInput] = useState('');

  const onSubmit = (evt) => {
    console.log('line 6');
    evt.preventDefault();
    props.handleAddItem(input);
    setInput('');
    // console.log("INPUT IS", evt.target.newItem.value);
  }


  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="newItem" onChange={(evt) => setInput(evt.target.value)} value={input}/>
      <button>Add New Item</button>
    </form>
  )
}


export default Form;
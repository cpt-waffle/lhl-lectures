import React, { useState } from 'react';



const Form = ({handleAdd}) => {

  const [val, setVal] = useState('');
  const [err, setErr] = useState(false);


  const onSubmit = evt => {
    evt.preventDefault();
    if( val !== '') {
      handleAdd(val);
      setErr(false);
      setVal('');
    } else {
      setErr(true);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text" value={val} onChange={evt => setVal(evt.target.value)}/>
      <button id="submit">Submit</button>
      {err && <h1>task cannot be blank!</h1>}
    </form>
  );
}

export default Form;
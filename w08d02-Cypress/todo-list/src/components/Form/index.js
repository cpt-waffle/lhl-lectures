import React, { useState } from 'react';



const Form = ({handleAdd}) => {

  const [val, setVal] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    // const value = evt.target.newItem.value;
    if (val) {
      handleAdd(val);
      setError(false);
      return;
    }
    setError(true);
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text" value={val} onChange={evt => setVal(evt.target.value)}/>
      <button id="submit">Submit</button>
      {error && <h1>task cannot be blank!</h1>}
    </form>
  );
}

export default Form;
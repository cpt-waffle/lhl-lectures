import React, { useState } from 'react';



const Form = ({handleAdd}) => {

  const [val, setVal] = useState('');
  const [err, setErr] = useState(false);


  const onSubmit = evt => {
    evt.preventDefault();
    if (val) {
      handleAdd(val);
      setVal('');
      setErr(false);
    } else {
      setErr(true);
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text" value={val} onChange={evt => setVal(evt.target.value)}/>
      <button id="submit">Submit</button>
      {err && <h1>Cannot be Blank!</h1>}
    </form>
  
  );
}

export default Form;
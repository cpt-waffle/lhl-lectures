import React, { useState } from 'react';



const Form = ({handleAdd}) => {

  const [val, setVal] = useState('');
  const [err, setErr] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    if (val.length !== 0) {
      handleAdd(val);
      setVal('');
      if (err) {
        setErr(false);
      }
    } else {
      setErr(true);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text" value={val} onChange={evt => setVal(evt.target.value)}/>
      <button id="submit" data-cy="submit">Submit</button>
      {err && <h3>Task cannot be Blank!</h3>}
    </form>
  
  );
}

export default Form;
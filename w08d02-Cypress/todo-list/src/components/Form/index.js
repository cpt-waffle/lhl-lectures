import React, { useState } from 'react';



const Form = ({handleAdd}) => {

  const [val, setVal] = useState('');
  const [error, setError] = useState(false);


  const onSubmit = evt => {
    evt.preventDefault();
    if (!val) {
      setError(true);
    } else {
      handleAdd(val);
      setVal('');
      if (error) {
        setError(false);
      }

    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text" value={val} onChange={evt => setVal(evt.target.value)}/>
      <button id="submit">Submit</button>
      {error && <h3>Cannot Be Blank!</h3>}
    </form>
  
  );
}

export default Form;
import React, { useState } from 'react';



const Form = ({handleAdd}) => {

  const [val, setVal] = useState('');
  const [err, toggleErr] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    // const value = evt.target.newItem.value;
    if (val.length) {
      handleAdd(val);
      setVal('');
      if (err) {
        toggleErr(false);
      }
    } else {
      toggleErr(true);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text" value={val} onChange={evt => setVal(evt.target.value)}/>
      <button id="submit">Submit</button>
      {err && <h2>Error!, Input cant be blank!</h2>}
    </form>
  );
}

export default Form;
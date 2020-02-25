import React, { useState } from 'react';

const Form = ({handleAdd}) => {

  const [error, toggleError] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    let val = evt.target.newItem.value.trim();
    if (val.length > 0)
      handleAdd(evt.target.newItem.value);
    else
      toggleError(prev => !prev);
    evt.target.newItem.value = '';
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text"/>
      <button id="submit">Submit</button>
      {error && <h1>CANNOT BE BLANK</h1>}
    </form>
  );
}

export default Form;
import React, { useState } from 'react';

const Form = ({handleAdd}) => {
  const [error, setError] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    let val = evt.target.newItem.value.trim();
    if (val.length) {
      handleAdd(val);
      if (error) {
        setError(false);
      }
      evt.target.newItem.value = '';
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text"/>
      <button id="submit">Submit</button>
      {error && <h2>Error! Cannot be Blank!</h2>}
    </form>
  );
}

export default Form;
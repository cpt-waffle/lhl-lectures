import React, { useState } from 'react';

const Form = ({handleAdd}) => {

  const [error, setError] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.newItem.value;
    if (value.length > 0) {
      handleAdd(value);
      setError(false);

    } else {
      setError(true);
    }
    
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="newItem" type="text"/>
      <button id="submit">Submit</button>
      {error && <h2>Error! Form Cannot Be Blank!</h2>}
    </form>
  );
}

export default Form;
//Rule 1 Import React from React
import React from 'react';
import './ListItem.css';

// declare a function by the same Name as a file
// Capitalize your component
function Form(props) {
  //must return JSX
  function handleOnSubmit(evt) {
    evt.preventDefault();
    console.log("THIS STOPS THE FORM!!");
    // console.log(evt.target.item.value);
    props.handleAddItem(evt.target.item.value);
  }

  return (
    <form onSubmit={handleOnSubmit}>
    <input type="text" name="item"/>
    <button>ADD ITEM INTO OUR LIST</button>
    </form>
  );
}


// Export your function
export default Form;
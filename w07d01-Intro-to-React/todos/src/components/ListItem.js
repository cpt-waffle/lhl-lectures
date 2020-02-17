//Rule 1 Import React from React
import React from 'react';
import './ListItem.css';

// declare a function by the same Name as a file
// Capitalize your component
function ListItem(props) {
  //must return JSX
  return (
    <li className="list-item">
      <p>{props.itemName}</p>
      <div>
        <button>Done</button>
        <button>Not Done</button>
      </div>
    </li>
  );
}


// Export your function
export default ListItem;
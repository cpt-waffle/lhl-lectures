import React from 'react';

const ListItem = ({item, done, completed}) => {
  const listClasses = 'listItem' + (done ? ' doneItem' : '')

  return (
    <li className={listClasses}>
      <h2>{item}</h2>
      {!done ? <button onClick={completed}className="done">✔</button> : <button onClick={completed}className="undone">X</button>}
    </li>
  );
}

export default ListItem;
import React from 'react';
import './todoitem.css'
// props
const ToDoItem = ({title, completionStatus, onClickCompletion}) => {
  // const {title, completionStatus, onClickCompletion} = props;
  const completed = {backgroundColor: ''};
  if (completionStatus) completed.backgroundColor = 'green';

  return (
    <li className='todoitem' style={completed}>
      <h5>{title}</h5>
      <button style={completed} onClick={onClickCompletion} className='todoitem--button'>Completed!</button>
    </li>
  )
}

export default ToDoItem;
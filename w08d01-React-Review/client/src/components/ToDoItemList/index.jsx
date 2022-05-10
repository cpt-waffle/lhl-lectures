import React from 'react'
import ToDoItem from './ToDoItem';


const ToDoItemList = ({list}) => {
  return (
    <ul>
      {list.map(item => <ToDoItem key={item.id} title={item.task} completionStatus={item.done} onClickCompletion={() => {}}/>)}
    </ul>
  )
}


export default ToDoItemList;
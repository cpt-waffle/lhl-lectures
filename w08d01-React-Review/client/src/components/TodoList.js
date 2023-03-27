import React from "react";
import Todo from "./Todo";


const TodoList = props => {
  // props.list
  return <div>
    {props.list.map(item => {return <Todo key={item.id} title={item.title}/> })}
  </div>
}



export default TodoList;
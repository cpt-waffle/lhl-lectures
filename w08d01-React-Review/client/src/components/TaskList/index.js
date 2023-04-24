import React from "react";
import Task from "./Task";

const TaskList = props => {

  const taskArray = props.tasks.map(task => {
    return <Task key={task.id} name={task.title}/>
  })

  return (
    <div>
      {taskArray}
    </div>
  )
}

export default TaskList;
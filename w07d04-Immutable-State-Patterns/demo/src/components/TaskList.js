

const TaskList = props => {

  const tasksHTML = props.tasks.map(taskObj => <Task key={taskObj.id} name={taskObj.task}/>)

  return (
    <div>
      {tasksHTML}
    </div>
  )
}

export default TaskList;
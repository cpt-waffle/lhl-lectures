import Task from "./Task";

const TaskList = props => {


  const tasks = props.tasks.map((task) => {
    return <Task key={task.id} title={task.name}/>
  })


  return (
    <ul>
      {tasks}
    </ul>
  )
}

export default TaskList;
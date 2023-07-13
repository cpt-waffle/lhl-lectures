import Task from "./Task";

const TasksList = (props) => {
  const tasks = props.tasks.map((task) => {
    return <Task key={task.id} banana={task.task}/>
  })
  // PhotoList
  // PhotoListItem Photo

  return (<div>
    {tasks}
  </div>)
}

export default TasksList;
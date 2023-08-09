import Task from "./Task";

const TaskList = props => {
  const arr = props.tasks.map(task => {
    return <Task key={task.id} name={task.task}/>
  });

  return (
    <ul>
      {arr}
    </ul>
  )
}


export default TaskList;
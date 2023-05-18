import Task from "./Task";

const TaskList = props => {
  return (
    <div>
      {props.tasks.map(task => <Task key={task.id} name={task.task}/>)}
    </div>
  )
}

export default TaskList;
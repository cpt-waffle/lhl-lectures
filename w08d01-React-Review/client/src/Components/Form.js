import useForm from "../hooks/useForm";

const Form = props => {
  const {input, onChange} = useForm();

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('form submission function!');
    props.addTask(input);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="newTask" value={input} onChange={onChange}/>
      <button>Add Task</button>
    </form>
  )
}

export default Form;
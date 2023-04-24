import { useState } from "react";

const useForm = (addTask) => {
  const [input, setInput] = useState('');

  const onInputChange = evt => {
    setInput(evt.target.value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    addTask(input);
    setInput('');
  }

  return {onSubmit, onInputChange, input}
}

export default useForm;
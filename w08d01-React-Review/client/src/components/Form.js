import React from "react";
import useForm from "../hooks/useForm";
import './Form.css';

const Form = props => {
  const {onSubmit, input, onInputChange} = useForm(props.addTask);

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="form--input"
        type="text"
        name="item"
        value={input}
        onChange={onInputChange}
      />
      <button className="form--btn">Add Item</button>
    </form>
  )
}

export default Form
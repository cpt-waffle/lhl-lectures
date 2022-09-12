import { useState } from "react";


const useForm = () => {
  const [val, setVal] = useState('');

  const onChange = (evt) => {
    setVal(evt.target.value);
  }

  const clear = (evt) => {
    evt.preventDefault();
    setVal('');
  }

  return {val, onChange, clear};
}

export default useForm;
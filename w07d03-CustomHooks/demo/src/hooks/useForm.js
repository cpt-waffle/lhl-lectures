import { useState } from "react";
import useToggle from "./useToggle";


const useForm = () => {
  const [val, setVal] = useState('');

  const onValChange = (evt) => {
    setVal(evt.target.value);
  }

  return {val, onValChange};
}


export default useForm;
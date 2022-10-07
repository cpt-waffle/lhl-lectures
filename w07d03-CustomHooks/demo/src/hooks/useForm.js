import { useState } from "react";

const useForm = () => {
  const [val, setVal] = useState('');

  const onValChange = (evt) => {
    setVal(evt.target.value);
  }


  /// return
  return {val, onValChange};


}


export default useForm;
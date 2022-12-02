import { useState } from "react";


const useForm = () => {

  const [val, setVal] = useState('');


  const onValChange = (evt) => {
    console.log(evt);
    setVal(evt.target.value);
  }



  return {val, onValChange};
}


export default useForm;
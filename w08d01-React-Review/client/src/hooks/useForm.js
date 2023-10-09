import { useState } from 'react';

const useForm = () => {
  const [val, setVal] = useState('');

  const onChangeVal = evt => {
    setVal(evt.target.value);
  } 

  return {val, onChangeVal}

}


export default useForm;
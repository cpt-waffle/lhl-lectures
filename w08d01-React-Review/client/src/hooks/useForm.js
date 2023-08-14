import {useState} from 'react';

const useForm = () => {
  const [input, setInput] = useState('buy milk');

  const onChange = (evt) => {
    setInput(evt.target.value);
  }

  return { input, onChange};
}

export default useForm;
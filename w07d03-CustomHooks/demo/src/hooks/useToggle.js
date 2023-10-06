import { useState } from 'react';


const useToggle = (defaultToggleState) => {
  console.log(defaultToggleState);
  const [toggle, setToggle] = useState(defaultToggleState);

  const onToggleClick = () => {
    setToggle(prev => !prev);
  }



  return { toggle, onToggleClick };
}

export default useToggle;
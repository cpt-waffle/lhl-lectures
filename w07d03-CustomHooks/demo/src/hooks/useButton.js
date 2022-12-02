// make a function, thats the same name as your file
import { useState } from "react";

// a helper function
// and a custom hook...

const useButton = () => {
  const [toggle, setToggle] = useState(false);

  const onSwitch = () => {
    setToggle(prev => !prev);
  }


  return {toggle, onSwitch}

}

// export default your function
export default useButton;
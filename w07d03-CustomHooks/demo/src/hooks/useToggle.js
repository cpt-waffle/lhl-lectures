// make a file with the prefix use_____.js
import { useState } from "react";


// make a function, same name as a file

const useToggle = () => {
  const [toggle, onToggle] = useState(false);

  const onSwitch = () => {
    //    toggle = false
    onToggle(prev => {
      return !prev
    });
    // toggle

  }

  return {toggle, onSwitch};
}


// export default the function

export default useToggle;
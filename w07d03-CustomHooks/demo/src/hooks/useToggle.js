import { useState } from "react";

// create a folder called hooks
// create a file with a prefix use_____.js

// make a function, with exact name as a file
// make sure that function gets export default out
// copy the logic from component to hook (or write new logic)
// import the things you need...

// Rule: hooks will never RENDER anything, its only going to contain LOGIC
const useToggle = (param) => {
  const [toggle, setToggle] = useState(param);

  const onToggle = () => {
    setToggle(prev => !prev)
  }
  
  return {toggle, onToggle};

}

export default useToggle;
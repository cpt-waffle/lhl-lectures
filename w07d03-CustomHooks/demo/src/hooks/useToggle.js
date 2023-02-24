
// 1 - make a function same name as a file
// 2 - export that function
// 3 - move all the logic from a component into this file 
// (state, useEffects, other hooks, etc)
// 4 - import any reactHooks (dependancies) that you may need
import { useState } from "react";


const useToggle = () => {

  // custom hooks
  // DO NOT RETURN ANY JSX to render
  const [toggle, setToggle] = useState(false);
  
  // make a customHook, called useApplication
  // and simply MOVE all the logic from Application.js to useApplication
  // then import the custom hook, and pass the values down like they were before


  const onClick = () => {
    //  
    setToggle(prev => {
      return !prev;
    })
  }

  return {toggle, onClick}
}


export default useToggle;
import React, {useState} from "react";
import useToggle from "../hooks/useToggle";

const ToggleSwitch = () => {
  const {toggle, onToggle} = useToggle(true);

  return (<div>
    
    {toggle ? <h1>ON</h1> : <h1>OFF</h1>}
    <button onClick={onToggle}>Toggle </button>
  </div>)

}

export default ToggleSwitch;
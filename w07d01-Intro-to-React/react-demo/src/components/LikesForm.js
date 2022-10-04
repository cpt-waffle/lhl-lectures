import { useState } from "react";

const LikesForm = () => {

  const [number, setNumber] = useState(44);
  // the only way to change state is to use the FUNCTION provided by useState
  // setNumber = val => number = val; reMountEntireComponentRightNow();

  // event listners
  const buttonClicked = () => {
    console.log("hello!!!");
    console.log(number);
    setNumber(number + 1);
  }


  return (<div>
    {number} <button onClick={buttonClicked}>likes!</button>
  </div>)
}

export default LikesForm;
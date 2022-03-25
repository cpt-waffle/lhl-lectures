import { useState, useEffect } from "react";


// making a custom hook steps:
// 1 make a file "use____.js"
// 2 make a function with the same name as file
// 3 export default the function
const useForm = (defaultVal) => {

  useEffect(() => {
    setTimeout(() => {
      console.log("use Effect after 1 sec");
    }, 1000)
  },[])

  const [val, setVal] = useState(defaultVal || '');

  const onChangeVal = (evt) => {
    setVal(evt.target.value);
  }

  // we return any variables, states, and/or methods, that a component will use
  // return an object that contains these ^

  return {val, onChangeVal};

}

export default useForm;

/// state, setState = {day, days, appointments, interviews, interviewrs}
//  setDay
// move all the logic for state/ useEffec into a different file

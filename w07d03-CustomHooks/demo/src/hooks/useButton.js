// step 1 -- make a hooks folder in /src
// step 2 -- make a file inside of the /hooks folder, with the prefix use 
//                                                           use_____.js

// step 3 -- make a function that is the same name as the file
// step 4 -- export the function
// step 5 -- move all of your logic ( with state, and useEffect, and other hooks)
//  into this file, make sure the FUNCTION returns the state variables and other functions
// the component may need. 
import { useState } from "react";

const useButton = () => {
  const [light, toggleLight] = useState(true);

    /// state is async
  const click = () => {
    toggleLight(prev =>  !prev)
  }
  
  return {light, click}
}


export default useButton; 
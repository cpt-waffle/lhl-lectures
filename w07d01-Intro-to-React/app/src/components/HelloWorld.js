// step 0, (in a new versions of react, this is not required anymore, )
import React from 'react';

// step 1, make a function that has the same name as the file.

const HelloWorld = () => {
  // step 3, every component will return JSX

  // step 4: ALL react components are wrapped by a single HTML child
  return(
    <h2>
      This is a hello world component, and this is line 10 of hello world component
    </h2>
  )
}


// Step 2, export default the said function

export default HelloWorld;
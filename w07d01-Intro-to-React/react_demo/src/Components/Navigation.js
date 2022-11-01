// step 1 make a file with same name as
// what the component name will be


// step 2 (optional step) import React from 'react';
import React from 'react';
import './Navigation.css';
// step 3 make a function with SAME NAME as THE COMPONENT NAME


// a "function" 
// functions take in parameters
// "properties" or props
const Navigation = (props) => {
  console.log("props ----->", props)
  // step 5 function needs to return some HTML(JSX)
  const bool = true;
  const title = 'Some Navbar';
  const altTitle = 'No Title Given :(';

  // turinary operator 
  // statement ? do_true : do_false
  // if (statement) {..do..} else {..do..} 

  return (
    <nav className="navbar">
        <h1>{bool ? props.title : altTitle}</h1>
        <h5>{bool && 'it was truthy'}</h5>
        {props.children}
    </nav>
  )
}


// step 4 function needs to be "export default"
export default Navigation;
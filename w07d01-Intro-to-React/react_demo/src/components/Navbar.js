// 1 - make a file, with a capital letter first, with your component name

// 2 - import React from 'react';
import React from 'react'; // somewhat optional

// 3 - make a function that is the exacltly same name as your file/component
const Navbar = (props) => {
  console.log("props", props);
  // components return HTML
  // JSX 
  // <%= %>
  return (
    <nav className="navbar">
      <h1>{props.title}</h1>
    </nav>
  )
}

// 4 - export default the function

export default Navbar;
// Step 0 (optional step for new react ver, BUT required for older ones )
import React from 'react';

import './Navbar.css'
//////////////////////
// module.exports
// requires...
/////////////////////

// Step 1 -- Make a function with the SAME name as your component
const Navbar = () => {
  // Step 3 --- Component should have a return, and it should RETURN HTML 
  return (
    <nav className="navbar">
      <h1>Some navbar</h1>
    </nav>
  )
}

// Step 2 -- Make sure this function gets `export default` 

export default Navbar;
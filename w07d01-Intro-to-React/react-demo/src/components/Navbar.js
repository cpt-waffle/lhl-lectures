// Optional ()
import React from 'react';
import './Navbar.css';

//Mandatory

// 1 - Create a function, with the SAME NAME
// as your component/file


const Navbar = () => {
  // 3 - your Component MUST return HTML
  return (
    <nav className="navbar">
      <h1>Some navbar</h1>
    </nav>
  )
  
}

// 2 - Function must be exported!!!

// module.exports = {default: Navbar};
export default Navbar;
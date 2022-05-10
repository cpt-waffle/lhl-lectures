// import React from 'react'  // Optional for newer ver of react, a must in older ver
import './navbar.css';
import React from 'react';


// make a function, same name as the component
const Navbar = () => {
  // return to render
  return (
    <nav className="navbar">
      <h1>Todo App</h1>
    </nav>
  );
}

// export default

export default Navbar;


export const A = () => <h1>Test</h1>
// equivalent to module.exports 
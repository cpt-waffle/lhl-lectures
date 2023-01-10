// rules of making a component!
// rule number 0 (optional)
import React from 'react';
import './Navbar.css';

//rule 1 -- make a function with THE SAME NAME as your file name!

const Navbar = (props) => {
  console.log(props);
  // rule 2 -- make sure the function returns HTML
  return (
    <nav className="navbar">
      <h1>{props.homeLink}</h1>
    </nav>
  )
}

// rule 3 -- export defaul the function
export default Navbar;


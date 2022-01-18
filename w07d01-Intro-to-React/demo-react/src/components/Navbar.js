// an optional rule (BUT IS REQUIRED WHEN USING OLDER REACT VER)
// 0 rule
import React from 'react';
import './navbar.css'

// 1 rule -- MAKE A FUNCTION -- preferably same name as the file ( to say this is a compoent) 
const Navbar = function(props) {
    // 3 rule --- COMPONENTS MUST RETURN SOMETHING TO RENDER!!!!!
    // 4 rule --- COMPONENTS MUST HAVE 1 PARENTS ELEMENT WRAPPING EVERYTHING
    let title = 'Some NavBar';
    if (props.title) {
      title = props.title;
    }

    return (
      <nav className="navbar">
        <h1>{title}</h1>
      </nav>
    )
}

// 2 rule -- Export your function... ( this is equivalent to module.exports BUT in a different syntax es6)
export default Navbar;
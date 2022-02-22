// by convention components are capitalized

// Rule 1 (optional)
import React from 'react';
import Login from './Login';

// Rule 2 -- Define a function with same name as your component name
const Navbar = function(props) {
    console.log("LINE 9: Navbar.js", props);
    // Rule 4 -- your function/component needs to return something
    // it needs to return HTML to be rendered
    const DEFAULT_TITLE = 'Navbar <(^_^<)';


    // EJS
    // <%= database['shortURL'].longURL
    return (
        <nav className="navbar">

            <h1>{props.title}</h1>
            <Login/>
        </nav>
    )

}

// Rule 3 -- export default the function

export default Navbar;

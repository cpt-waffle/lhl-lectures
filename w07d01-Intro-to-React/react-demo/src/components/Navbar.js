// 0 (optional step)
// import React from 'react';
import React from 'react';
import './Navbar.css';


//make function, SAME NAME as the file
// of your component

const Navbar = (props) => {
  console.log(props.title);
  // make sure your function returns
  // some JSX
  const fruit = 'banana';

  return (
    <nav className="navbar">
      <h1>{props.title}</h1>
      {fruit}
    </nav>
  )
}
// <%= %>


// export default the function

export default Navbar;
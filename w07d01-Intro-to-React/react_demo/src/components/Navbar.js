// 1) import React from react
import React from 'react'; 
import './Navbar.css';

// 2) make a function exact same name as the file

// props or properties
const Navbar = (props) => {
  // 4) function must return something to render (JSX )
  const number = 3;
  const array = ['Menu', 'Login', 'Register'];


  // statement && value    -- displays the value if statement is true

  // statement ? value1 : value2   if true display value1 if false dispaly value2 (if/else)

  // const htmlArray = [];
  // for (let item of array) {
  //   htmlArray.push(<h4>--{item}--</h4>)
  // }

  const htmlArray = array.map(item => {
    return <h4>&nbsp;&nbsp;{item}&nbsp;&nbsp;</h4>
  })



  // <%= shortURL %>
  return (
  <nav className="navbar">
    <h1>Some navbar</h1>
    { htmlArray }
  </nav>
  )

}

// 3) make sure function gets exported!
// module.exports
export default Navbar;
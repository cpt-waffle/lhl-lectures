// to make a component, make sure to first make a file
// capitalize (and use camelcase) the file name (either .js or .jsx)
import './Nav.css';

// make a function, the function is the SAME NAME, as the file


const NavBar = props => {
  // make sure this function returns something to render
  // aka (jsx js + xml)
  const item = 'Main Menu';

  // <%= item %>
  // simular, but you use {}
  const display = false;

  return (
    <nav className="nav">
      {display || <h4>My Menu Item</h4>}
      {props.children}
      


    </nav>
  )
}

// make sure this function gets exported (export default)

export default NavBar;

//  module.exports = {default: Navbar, PI,}

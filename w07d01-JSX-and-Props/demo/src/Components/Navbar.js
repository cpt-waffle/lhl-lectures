import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li className="navbar-items--item">Home</li>
        <li className="navbar-items--item">Products</li>
        <li className="navbar-items--item">Login</li>
        <li className="navbar-items--item">Register</li>
      </ul>
    </nav>
  )
}

// module.exports = Navbar;
export default Navbar;
import './Navbar.css';

const Navbar = props => {
  return (
    <nav className="navbar">
      <h1>Some navbar</h1>
      <h3>{props.num}</h3>
    </nav>
  )
}

export default Navbar;

// module.exports 
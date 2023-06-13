import './Navbar.css';

const Navbar = props => {
  return (
    <nav className="navbar" style={{backgroundColor: `rgba(255,0,0,${props.color})` }}>
      <h1>Some navbar</h1>
      <h1>{props.numberOfClicks}</h1>
    </nav>
  );
}

export default Navbar;
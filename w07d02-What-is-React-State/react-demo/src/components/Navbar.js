import './Navbar.css';

// props object
const Navbar = (props) => {
  console.log(props);
  return (
    <nav class="navbar">
      <h1>Some navbar</h1>
      <h2>{props.banana}</h2>
    </nav>
  )
}

export default Navbar;
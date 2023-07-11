import './Navbar.css';

const Navbar = (props) => {
  console.log(props)

  return (
    <nav class="navbar">
      <h1>Some navbar</h1>
      <h1>{props.num}</h1>
    </nav>
  );
}

export default Navbar;
import './Navbar.css';

const Navbar = props => {
  return (
    <nav className='navbar'>
      <h1>some nav</h1>
      <h1>{props.totalLikes}</h1>
    </nav>
  )
}

export default Navbar;
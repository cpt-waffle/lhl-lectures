import './NavigationBar.css';
// make a function with EXACT SAME NAME as the file


const NavigationBar = () => {
  // make sure this file returns something to render 
  // HTML/JSX
  return (
    <nav className="nav">
      <h2>React</h2>
      <ul>
        <li>login</li>
        <li>Register</li>
      </ul>
    </nav>
  )
}

// make sure that this is export defaulted 
// module.exports.default 
// is the same as export default 

export default NavigationBar;
import { useState } from "react";

const Navbar = (props) => {

  return (
    <nav className="navbar">
      <h1>Some navbar</h1>
      <h2>{props.banana}</h2>
    </nav>
  );
}

export default Navbar;
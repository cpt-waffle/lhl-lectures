import React from 'react';
import './NavSecondary.css';

const NavSecondary = (props) => {
  console.log(props);
  return(
    <div className="nav-sec">
      {props.menu}
    </div>
  )

}

export default NavSecondary;
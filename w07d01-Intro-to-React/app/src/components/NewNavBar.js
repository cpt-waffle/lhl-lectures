import React from 'react';
import './newnavbar.css';

const NewNavBar = (props) => {

  // const array = [];
  // ['Home', 'Login', 'Register']
  // ^
  // [<h1>Home</h1>, <H1>Login</h1>]

  /////////////////////////////////////
  // for (let item of props.menuItems ) {
  //   array.push(<h1>{item}</h1>)
  // }
  //////// map,reduce, forEach, filter,x
  const array2 = props.menuItems.map(item => <h1>{item}</h1>);
  return (
    <div className='newnav'>
      {array2}
    </div>
  )
}

export default NewNavBar;
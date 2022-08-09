// 0 - (optional) import React from 'react';
import React from 'react';
import './Nav.css';
// 1 - make a function, with the same name as your Component

const Navbar = () => {
  // 3 - make sure your function/component, returns some HTML
  const title = 'Fake LinkedIn!';
  // <%=  %>
  // <%   %>
  // $(document).on('ready', () => {
    // $('h1').text('Fake LinkedIn!');
  // })
  const item = <li>Hello World</li>;
  // const menuItems = []

  const menuNames = ['Menu', 'Home', 'Login', 'Register']

  // for (let item of menuNames) {
  //   menuItems.push(<li>{item}</li>);
  // }

  const menuItems = menuNames.map(item => <li>{item}</li>)

  return (
    <nav className="nav">
      <h1>{title}</h1>
      <ul className='menu'>
        {menuItems}
      </ul>
    </nav>
  )
}
// 2 - export default the Function
export default Navbar;
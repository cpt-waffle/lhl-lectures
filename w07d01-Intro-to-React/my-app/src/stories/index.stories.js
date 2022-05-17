// Step 1 
import React from 'react';

// Step 2
import { storiesOf} from '@storybook/react';

// Step 3 -- write the story with the storiesOf function
import NavbarSecondary from '../components/NavSecondary';
import Profile from '../components/Profile';

storiesOf('My random component')
.add('default', () => <h1>HELLO WORLD</h1>)
.add('deafult 2 ', () => <h2>hi</h2>)

// PROPS
// Menu, Login, Register
// Menu, Logout | Welcome Mr Buttons!

// NAVBAR is a FUNCTION
// in functions we can pass PARAMTERS
// Navbar(a,b,c,d,e,f,g...)
// Navbar = (props)
// The way to pass info into a component is via props:
// <Navbar banana={1} b={2} c={3} d={4} />
const greetings = 'hello!';
storiesOf('NavbarSecondary Component')
.add('default', () => <NavbarSecondary/>)
.add('passing in a prop', () => <NavbarSecondary greetings={greetings} menu={'Menu, Login, Register'} confirm={true} c={'c'} d={'d'}/>)


// profile props
// img
// name
// title

storiesOf('Profile Component')
.add('Default', () => <Profile img={'https://i.redd.it/7k24xova0ya11.jpg'} name={'Mr Meows'} title={'Lead Team Designer'}/>)
.add('Not mr Meows', () => <Profile img={'https://i.pinimg.com/736x/bc/63/9a/bc639a8b3b3a3047b8b40c11adab5f12--coastal-christmas-merry-christmas.jpg'} name={'Ms Woof'} title={'Head of Barkitechture '}/>)
// Step 1: import React from 'react';

import React from 'react';
import NewNavBar from '../components/NewNavBar';

// Step 2: import storiesOf

import { storiesOf } from '@storybook/react';

// write stories...

// to write a story..

// Step 1: you will use the storiesOf function to give a title of the story

// Step 2: you will use the function .add() to add a story to the title
storiesOf('My first Component')
  .add('Default first component', () => <h2>Default First Component</h2>)
  .add('2nd default component', () => <h2>second</h2>)

  
const dummyMenuItems = ['Home', 'Login', 'Register'];
const dummyMenuItems2 = ['Home', 'Login', 'Register', 'Home', 'Login', 'Register', 'Home', 'Login', 'Register'];


storiesOf('My New Navbar')
.add('default navbar', () => <NewNavBar menuItems={dummyMenuItems}/>)
.add('MANY ITEMS', () => <NewNavBar menuItems={dummyMenuItems2}/>)
.add('no items', () => <NewNavBar menuItems={[]}/>)



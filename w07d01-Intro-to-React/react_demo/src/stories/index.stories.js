// Step 1: 
import React from 'react';


// step 2: import storiesOf function

import {storiesOf} from '@storybook/react';

// Step 3: write your stories using the storiesOf function....

////////// To build the component and test it in storybook, 
// import it first.

import Profile from '../Components/Profile';

storiesOf('h1', module)
  .add('default h1 that says hello world', () => <h1>Hello World</h1>)
  .add('xyz', () => <h1>xyz</h1>)



// what props should my component have?

const placeholderPic = 'https://img.wattpad.com/1f39c9cd0ae5a20044f725c720a656ba28d82f41/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a5a6f6a72737649346c785a62513d3d2d3139302e313436333133643263653534376138653738363036313035393232332e6a7067?s=fit&w=720&h=720';
const placeholderName = 'Mr Woofs';
const placeholderTitle = 'Junior Nap Engineer';

storiesOf('Profile', module)
.add('default profile', () => <Profile picture={placeholderPic} position={placeholderTitle} name={placeholderName}/>)
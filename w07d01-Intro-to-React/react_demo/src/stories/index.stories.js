// Step 1
import React from 'react';
/////////
import Porfile from '../components/Profile';
///////

// Step 2

import {storiesOf} from '@storybook/react';


// Step 3 -- Write your stories

storiesOf('h1 component', module)
.add('default h1', () => <h1>Hello Test!</h1>)

// Making a component with Storybook!1

// step 1 -- make a default story 

// step 2 -- build a default component (in /components) and import it into index.stories.js

// what props does my component take?

const img = 'https://miro.medium.com/max/1024/0*xc9fvuF4Cwn5yRaH.jpg';
const name = 'Mr Woofs';
const title = 'Senior Nap Engineer';

storiesOf('Profile', module)
.add('default profile', () => <Porfile image={img} name={name} title={title}/>)
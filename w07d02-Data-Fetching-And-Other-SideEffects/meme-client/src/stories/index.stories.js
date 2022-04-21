import React from 'react';

import { storiesOf } from '@storybook/react';
import MemeCard from '../components/MemeCard'

storiesOf('random story').add('Test', () => <h1>Hello world!</h1>)



// WHat props should i pass into this meme card??

// img prop
// title prop
const dummyImg = 'https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg';

storiesOf('MemeCard')
  .add('Default memecard', () => <MemeCard img={dummyImg} title="Mr Buttons!"/>)
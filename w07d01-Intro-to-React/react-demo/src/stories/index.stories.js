// Step 1
import React from 'react';

import Navbar from '../Components/Navbar';
import Card from '../Components/Card';

// Step 2
import { storiesOf } from '@storybook/react';

/// write a title of story

storiesOf('This is a test story', module)
  .add('hello world', () => <h1>Hello World</h1>)

storiesOf('Navbar', module)
  .add('default navbar', () => <Navbar/>)

// Write a story with something to render
const catImg = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg"
const catDesc = "I'm baby venmo taiyaki prism, post-ironic unicorn gentrify man bun farm-to-table brooklyn occupy freegan chartreuse pork belly chambray cornhole. Taxidermy flexitarian chicharrones, seitan fanny pack salvia tumblr mlkshk asymmetrical. Forage tumblr farm-to-table, tumeric live-edge bespoke butcher chillwave pickled chia. Austin roof party taxidermy fingerstache authentic hammock."


const dogPic = 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg';
const dogName = 'Mr Woofs';
const dogtitle = 'Lead Architecture Facilitator';
const dogDesc = "I'm baby venmo taiyaki prism, post-ironic unicorn gentrify man bun farm-to-table brooklyn occupy freegan chartreuse pork belly chambray cornhole. Taxidermy flexitarian chicharrones, seitan fanny pack salvia tumblr mlkshk asymmetrical. Forage tumblr farm-to-table, tumeric live-edge bespoke butcher chillwave pickled chia. Austin roof party taxidermy fingerstache authentic hammock."


storiesOf('Card', module)
  .add('default card', () => <Card/>)
  .add('card with properties', () => 
  <Card 
    img={catImg}
    name="Mr Meows"
    title="Team Lead Designer"
  >
    <h2>Summary</h2>
    <p>This is my favorite picture of a cat!!</p>
  </Card>)
  .add('card with properties but its a dog', () => 
    <Card
      img={dogPic}
      name={dogName}
      title={dogtitle}
    />
  )
  // Card({img: '', name: '', title: ''})
// make a component and make sure storybook 
//can render it

//build the component while working in storybook
// Step 1
import React from 'react';

// Step 2

import { storiesOf } from '@storybook/react';

//////////////////
import Card from '../components/Card'

/////////////////

// Writing a story 
storiesOf('First ever storybook story', module)
  .add('hello world', () => <h1>Hello World</h1>)
  .add('hello world1', () => <h1>Hello World1</h1>)
  .add('hello world2', () => <h1>Hello World2</h1>)
  .add('hello world3', () => <h1>Hello World3</h1>)


const catPic = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700"
const title = "Lead Team Designer";
const name = 'Mr Meows';
const catDesc = "I'm baby venmo taiyaki prism, post-ironic unicorn gentrify man bun farm-to-table brooklyn occupy freegan chartreuse pork belly chambray cornhole. Taxidermy flexitarian chicharrones, seitan fanny pack salvia tumblr mlkshk asymmetrical. Forage tumblr farm-to-table, tumeric live-edge bespoke butcher chillwave pickled chia. Austin roof party taxidermy fingerstache authentic hammock."

const dogPic = 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg';
const dogName = 'Mr Woofs';
const dogtitle = 'Lead Architecture Facilitator';
const dogDesc = "I'm baby venmo taiyaki prism, post-ironic unicorn gentrify man bun farm-to-table brooklyn occupy freegan chartreuse pork belly chambray cornhole. Taxidermy flexitarian chicharrones, seitan fanny pack salvia tumblr mlkshk asymmetrical. Forage tumblr farm-to-table, tumeric live-edge bespoke butcher chillwave pickled chia. Austin roof party taxidermy fingerstache authentic hammock."

// props.children 
storiesOf('Card', module)
  .add('Cat Card', () => 
    <Card name={name} title={title} imgURL={catPic}>
      <h2>Mr Meows Description</h2>
      {catDesc}
    </Card>)
  .add('Dog Card', () => <Card name={dogName} title={dogtitle} imgURL={dogPic}/>)


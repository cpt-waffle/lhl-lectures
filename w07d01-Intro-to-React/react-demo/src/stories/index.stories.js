// Step 1:

import React from 'react';
import Avatar from '../components/Avatar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';


// Step 2: 
import { storiesOf } from '@storybook/react';

// Writing a story

storiesOf('Testing', module)
  .add('Hello world', () => <h1>hello world</h1>)
  .add('hi', () => <h1>hi</h1>)

storiesOf('Navbar', module)
  .add('default navbar', () => <Navbar/>);

// Avatar(2, 'hello', 3.14, )
storiesOf('Avatar', module)            // key name is required
  .add('default avatar', () => <Avatar/>)
  .add('avatar with an image property', () => <Avatar image="https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg"/>)
  .add('avatar with giraffe', () => <Avatar image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg"/>)

storiesOf('Card', module)
  .add('default card', () => <Card/>)
  .add('card with props', () => <Card image={'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg'} name={'Worry Dogo'} title={'HR'}/>)
//RULE 1: of react import React from 'react';
import React from 'react';

// for story book, we need use a method called stories of, to display/render a piece of html/js (JSX)
// on the page FOR MOCKING!!!

import { storiesOf } from '@storybook/react';

// Import the component i want to work with
import Card from '../components/card/card';
import Hand from '../components/Hand/Hand';

// writing components like HTML(-y)
storiesOf('Card', module)
  .add('Default Card', () => <Card/>)
  // Card(3, 'clubs',true, 'test')
  .add('3 of Clubs', () => <Card number={3} suit={'clubs'}/>)
  .add('9 of Hearts', () => <Card number={9} suit={'hearts'} color="red"/>)


  const arr = [
    {number: 2, suit: 'clubs'},
    {number: 10, suit: 'diamonds', color:"red"},
    {},
  ]

  // PITFALL
  // variable is called arr
  // were passing it into a component called Hand under a property called "cards"
  // how do i refer it to inside of the hand component??
  storiesOf('Hand', module)
    .add('Hand', () => <Hand cards={arr}/>)
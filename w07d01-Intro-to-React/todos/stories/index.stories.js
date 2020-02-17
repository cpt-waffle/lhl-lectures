import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ListItem from '../src/components/ListItem/';
import List from '../src/components/List/';

const item1 = "Buy Milk";
const item2 = "Teach react, and storyboard, and components and then get pizza!";

storiesOf('List Item', module)
  .add('Default Item', () => <ListItem itemName={item1} />)
  .add('Item with many many many words', () => <ListItem itemName={item2}/>)
  .add('Empty Item', () => <ListItem/>)

const emptyArr = [];
const fullArr = [
  'Buy Milk',
  'Learn React',
  'Buy Bitcoin'
];

storiesOf('List', module)
.add('Empty List', () => <List items={emptyArr}/>)
.add('Full List', ()=> <List items={fullArr}/>)

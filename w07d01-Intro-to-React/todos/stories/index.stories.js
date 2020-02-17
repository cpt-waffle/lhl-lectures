import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// function yy(p,c,d) {
//   ///
// }

// asodiaiofjhsdifs = 546;

// yy(asodiaiofjhsdifs,true,'hello')

let number = 43;

import ListItem from '../src/components/ListItem';
import ListItemList from '../src/components/ListItemList';

// const item1 = "Buy Milk";
// const item2 = "Teach react, and storyboard, and components and then get pizza!";
const todoItems = ['Buy Milk', 'Read a Book', 'Buy Bitcon', 'Downvote Angular'];

storiesOf("List Item", module)
  .add('Default List Item', () => <ListItem itemName={'Buy Milk'} bb={number}/>)
  .add('List Item React', () => <ListItem itemName={'Learn React'}/>)
  .add('List Item Huge Info', () => <ListItem itemName={'Read all the books for react curr'}/>)

storiesOf("List Item List", module)
  .add("ListItem with No items", () => <ListItemList/>)
  .add("ListItem with 4 Items", () => <ListItemList list={todoItems}/>)





// storiesOf('List Item', module)
//   .add('Default Item', () => <ListItem itemName={item1} />)
//   .add('Item with many many many words', () => <ListItem itemName={item2}/>)
//   .add('Empty Item', () => <ListItem/>)

// const emptyArr = [];
// const fullArr = [
//   'Buy Milk',
//   'Learn React',
//   'Buy Bitcoin'
// ];

// storiesOf('List', module)
// .add('Empty List', () => <List items={emptyArr}/>)
// .add('Full List', ()=> <List items={fullArr}/>)

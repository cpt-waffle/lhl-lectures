import React from 'react';

import {storiesOf} from '@storybook/react';

///
import Todo, {AA} from '../components/Todo';
import TodoList from '../components/TodoList';

storiesOf('h1', module)
.add('default h1', () => <h1>hello world</h1>)


const todoItem = {id: 1, title: 'buy milk!'};

// Todo
storiesOf('Todo', module)
.add('Todo default', () => <Todo title={'check how to export a component regularly'} />)
.add('Todo but with an api mockup', () => <Todo title={todoItem.title}/> )
.add('AA', () =>  <AA/>)

//  Todo({...})
// TodoList

const todoItems = [
  {id: 1, title: 'aaa'},
  {id: 2, title: 'buy eth'},
  {id: 3, title: 'buy gamestop'},
  {id: 4, title: 'finish testing'},
  {id: 5, title: 'bbb'},
]

storiesOf('TodoList', module)
.add('TodoList default', () => <TodoList list={todoItems}/>)
// Form



storiesOf('Form', module)
.add('Form Default', () => <h1>hello world</h1>)
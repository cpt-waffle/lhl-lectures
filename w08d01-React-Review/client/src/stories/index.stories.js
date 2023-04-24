import React from 'react';

import {storiesOf} from '@storybook/react';
import Task from '../components/TaskList/Task';
import TaskList from '../components/TaskList';

///

storiesOf('h1', module)
.add('default h1', () => <h1>hello world</h1>)

// Task({a:1, b:2, c:3, name: 'Do a React Review'})
//          ^--- props object
storiesOf('Task Component', module )
  .add('Task', () => <Task name={'Do a React Review'}/>)


const todoItems = [
  {id: 1, title: 'aaa'},
  {id: 2, title: 'buy eth'},
  {id: 3, title: 'buy gamestop'},
  {id: 4, title: 'finish testing'},
  {id: 5, title: 'bbb'},
]
  
storiesOf('Task List Component', module)
  .add('Task List', () => <TaskList tasks={todoItems}/>)
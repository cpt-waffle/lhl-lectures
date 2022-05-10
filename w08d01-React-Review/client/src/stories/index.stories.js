import React from "react";

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import ToDoItem from '../components/ToDoItemList/ToDoItem'


storiesOf('Test')
  .add('Random Story', () => <h1>Random Story</h1>);


// What kind of props (the name and the type)
// will be passed into ToDoItem?
storiesOf('ToDoItem')
  .add('A single Item', 
    () => <ToDoItem 
            title="Finish CSS styling"
            completionStatus={false}
            onClickCompletion={action('button-clicked')}
          />)
    .add('A single Item that is completed', 
    () => <ToDoItem 
            title="Finish CSS styling"
            completionStatus={true}
            onClickCompletion={action('button-clicked')}
          />)
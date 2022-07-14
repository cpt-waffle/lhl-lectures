import React from 'react';
import {storiesOf} from '@storybook/react';
import Poster from '../components/Poster';


storiesOf('Test', module)
  .add('Test Story', () => <h1>Hello World</h1>);




const exampleData = {
  id: 1,
  name: 'Mr Meows, Lead Team Designer',
  url: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'
}


storiesOf("Poster Component", module)
  .add('Default Poster with default data', () => <Poster name={exampleData.name} imgURL={exampleData.url}/>)

  // when you have a big component to build...
  // and it consists of other smaller components that you need to build...
  // its better to make a folder that is called "component_name" and put all
  // the small components within it
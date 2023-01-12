import React from 'react';
import {storiesOf} from '@storybook/react';
import MemeContainer from '../components/MemeContainer/'

storiesOf('Test', module)
  .add('test', () => <h1>Test</h1>)


  // Storybook =/= React

const fakeData = {
  id: 1,
  name: 'mfw: When we learn useEffect',
  url: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'
}

// 1) storiesOF (story title)


// {MemeContainer({id: fakeData.id,  name: fakeData.name, url: fakeData.url})}
// storiesOf('MemeContainer2', module)
//   .add('Default Props', () => {return MemeContainer({})})


storiesOf('MemeContainer', module)
  .add('Default Props', () => 
  <MemeContainer 
    id={fakeData.id} 
    name={fakeData.name} 
    url={fakeData.url}
  />)
// 2) .add (story desc)
// 3) make a component
// 4) import the component
// 5) make add() render that component
// 6) build the component out 
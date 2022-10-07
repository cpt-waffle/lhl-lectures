import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Poster from '../components/Poster';

storiesOf('Test', module)
  .add('test', () => <h1>Test</h1>)


const exampleData = {
  id: 1,
  name: 'Mr Meows, Lead Team Designer',
  url: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'
}


storiesOf('Poster', module)
  .add('default story', () => <Poster name={exampleData.name} img={exampleData.url} />)
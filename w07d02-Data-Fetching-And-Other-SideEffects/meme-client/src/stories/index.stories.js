import React from 'react';

import { storiesOf } from '@storybook/react';
import MemeMachine from '../components/MemeMachine';

storiesOf('random story').add('Test', () => <h1>Hello world!</h1>);


const titleName = 'Fake Meme Title';
const imgUrl = 'https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg';

storiesOf('MemeMachine').add('Meme Machine', () => 
  <MemeMachine title={titleName} img={imgUrl}/>
);
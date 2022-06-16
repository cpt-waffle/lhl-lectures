import React from 'react';
import { storiesOf } from '@storybook/react';

/// components
import Meme from '../components/Meme';
import MemeList from '../components/MemeList';

storiesOf('Test Story', module)
  .add('Hello world', () => <h1>Hello World</h1>);

// Meme

// props
const dummyMemeData = {
  id: 1,
  name: "Adrian's fresh meme",
  url: "https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145"
}


storiesOf('Meme', module)
  .add('default meme', () => <Meme data={dummyMemeData}/>);


const dummyArrayMemeData = [
  {
    id: 1,
    name: "Adrian's fresh meme",
    url: "https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145"
  },
  {
    id: 1,
    name: "Adrian's fresh meme",
    url: "https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145"
  }
]
// MemeList
storiesOf('MemeList', module)
  .add('default list', () => <MemeList list={dummyArrayMemeData}/>);


  storiesOf("DayListItem", module) 
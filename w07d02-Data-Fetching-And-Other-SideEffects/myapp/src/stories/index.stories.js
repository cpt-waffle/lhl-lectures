import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Meme from '../components/Meme'


const data = {
  name: "Adrian's fresh meme",
  url: "https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145"
}



storiesOf('MEMES TEST', module)
  .add('Getting a Default Meme to Appear', () => <Meme name={data.name}  url={data.url}/>)
  .add('Empy Meme', () => <h1>Hello Universe</h1>)


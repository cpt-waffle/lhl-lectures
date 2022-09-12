import React from 'react';

import {storiesOf} from '@storybook/react';
import MemeList from '../Components/MemeList'
import Meme from '../Components/MemeList/Meme';


storiesOf('default h1 tag', module)
  .add('h1', () => <h1>Hello!</h1>)

const arrayofMemes = [
  {
    id: 1,
    title: "Mr Meows",
    img: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'
  },
  {
    id: 2,
    title: "Mr Meows",
    img: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'
  },
  {
    id: 3,
    title: "Mr Meows",
    img: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'
  },
]

  // MemeList
storiesOf('MemeList', module)
  .add('empty list', () => <MemeList list={arrayofMemes}/>)
  // TypeScript
  ///

  // Meme

const defaultTitle = "Mr Meows"
const defaultIMG = 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'


storiesOf('Meme', module)
  .add('default meme', () => <Meme title={defaultTitle} img={defaultIMG}/>);
// Meme(title, img)

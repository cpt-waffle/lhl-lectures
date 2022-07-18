import React from 'react';

import {storiesOf} from '@storybook/react';

import Meme from '../components/Meme'
import Memelist from '../components/Memelist'

// to write a story...

storiesOf('Test', module)
  .add('random H1 tag', () => <h1>hello world</h1>)

// building a component with storybook

// image and a title
// PROPS
// Meme(img='', title='')
// meme(a,b)
const defaultTitle = "Mr Meows"
const defaultIMG = 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'

storiesOf("Meme Component", module)
  .add('Default Meme', () => <Meme title={defaultTitle} img={defaultIMG}/>)


// A Collecition Component

// multiple 
// an array or an object?
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


storiesOf('MemeList', module)
  .add('Default Memelist', () => <Memelist list={arrayofMemes}/>)
import React from 'react';
import {storiesOf} from '@storybook/react'

import Meme, {A} from '../components/MemeList/Meme';
import MemeList from '../components/MemeList/'

storiesOf('default test for h1', module)
  .add("h1", () => <h1>Hello!</h1>)



const defaultTitle = "Mr Meows"
const defaultIMG = 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700'

storiesOf('Meme', module)
  .add('Default meme', () => 
  <Meme img={defaultIMG} title={defaultTitle}/>)
// Meme({title: defaultTitle, img: defaultImage})
storiesOf('A', module)
  .add('Default A', () => <A>
    <div>
      <h1>This is our A tag</h1>
    </div>
    </A>)


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
  .add('default', () => <MemeList list={arrayofMemes}/>)
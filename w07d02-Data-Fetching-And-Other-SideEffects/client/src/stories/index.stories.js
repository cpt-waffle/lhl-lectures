import React from 'react';
import {storiesOf} from '@storybook/react';
import Meme from '../components/Meme';
import MemeList from '../components/MemeList';

storiesOf('Test', module)
  .add('test', () => <h1>Test</h1>)


// Meme
// 
storiesOf('Meme Component', module)
  .add('default meme', () => Meme({img: undefined}))
  .add('meme with props', () => <Meme 
      img={"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700"}
      title={"this is a title"}/>
  )


// MemeList

const memeList = [
  {id: 1, img: 'https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg', title: 'Fake Title1'},
  {id: 2, img: 'https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg', title: 'Title 2'},
  {id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_khPtF4dI3HqtRkmsXCA7XuvO7b1Vh3bp-A&usqp=CAU', title: 'TTTTT 3'},

]

storiesOf('Meme List', module)
  .add('memelist default', () => <MemeList list={memeList}/>)
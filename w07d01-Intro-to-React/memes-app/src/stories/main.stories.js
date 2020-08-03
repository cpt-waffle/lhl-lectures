// Building a Story(Stories)
// Step #1
import React from 'react';
// Step #2
import { storiesOf } from '@storybook/react';
// Step #3 - Write some Stories
////////////////////////////////////////////
// Components that I am making stories for....
import Meme from '../Components/Meme';



storiesOf('Random Div')
  .add('Div with words', () =><div>Hello World</div>)
  .add('Div with numbers', () =><div>12345</div>)
  .add('empty div', () => <div></div>)

  storiesOf('Random Div-2')
  .add('Div with words-2', () =><div>Hello World</div>)
  .add('Div with numbers-2', () =><div>12345</div>)
  .add('empty div-2', () => <div></div>)

// obj = {title: 'Dogs are Cray!!!', imgURL: ''}
// Meme(obj)
// <Meme title={'Dogs are Cray!!!'} imgURL={'...'} likesNumber={33} />
const customTitle = 'What a Funny Dog!!!';

  storiesOf('Meme Component')
    .add('A default Meme', () => <Meme/>)
    .add('A Dog Meme', () => <Meme title={customTitle} imgURL={'https://i.pinimg.com/236x/f7/1a/3b/f71a3b1e7fcaa922150b77c5d2ea1917--puns-for-kids-funny-comics-for-kids.jpg'}/>)
    .add('A Cat Meme', () => <Meme title='crazy cat!' imgURL={'https://i.insider.com/5df773cefd9db21a1c58b0c4?width=1100&format=jpeg&auto=webp'}/>)
    .add('A JS Meme', () =>  <Meme title='programmer humor' imgURL={'https://i.redd.it/4skcofasa1p01.png'}/>)

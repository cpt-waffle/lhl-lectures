// Step #1 
import React from 'react';
// step #2 import storiesOf
import { storiesOf } from '@storybook/react';
/////////////////
import Meme from '../components/Meme';
//     ^----------- function (pretend for now)
//   Meme() ==> default meme because the img and title are hardcoded
//   Meme(url, title)


////////

// When working with stories we will be using a function called
// storiesOf. `storiesOf` will help us show a "component" on a screen
// and help see how it visually looks.
const url = 'https://i.ytimg.com/vi/LjbTFSihoaY/sddefault.jpg'


storiesOf('Test Heading')
    .add('Heading with hello world title', () => <h1>Hello World!</h1>)
    .add('wow', () => <h1>WOW</h1>)
    .add('Empty Heading', () => <h1></h1>)

storiesOf('Meme')
    .add('Default Meme', () => <Meme/>)
    .add('Parameters Meme', () => <Meme img={url} title={'Whers the Lamb Sauce!?'} liked={false}/>)
    .add('Parameters Meme v2', () => <Meme img={"https://i.pinimg.com/originals/bb/20/9c/bb209c117d44d5ff32e491c884623e03.jpg"} title={'Cold Meme'}/>)



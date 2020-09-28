// STEP #1 Import React from 'react'
import React from 'react';
// Step #2 import storiesof from Storybook
import { storiesOf } from '@storybook/react';

// Import our component
import Meme from '../components/Meme';
//      ^---------------------- as a function Meme() // ---> FOR LEARNING PURPOSES ONLY
// url = '//' Meme(url)

// <Meme  memeURL={...} id={....} apple={...}/>
//            ^----------^----------^ ----- properties or PROPS


import MemeList from '../components/MemeList';

// STEP 3 write your stories....
storiesOf('Basic React rendering')
    .add('h1 with hello world', () => <h1>Hello World!</h1>)
    .add('h2 with greetings', () => <input type='text'/>)
    .add('image with a cat', () => <img src="https://i.imgur.com/DSCvjeO.jpg"/>)



const url = 'https://pleated-jeans.com/wp-content/uploads/2013/04/3sxnop-1.jpg';

storiesOf('Meme Component')
    .add('default meme', () => <Meme></Meme>)
    .add("Another meme", () => <Meme memeURL={url} apple={11} title={'DRY SOUP'}/>)


const ramseyMemes= [
    {id: 1, url: 'https://pleated-jeans.com/wp-content/uploads/2013/04/3sxnop-1.jpg'},
    {id: 2, url: 'https://www.shutupandtakemymoney.com/wp-content/uploads/2020/04/oscar-ramsay-gordon-ramsay-son-meme.jpg'},
    {id: 3, url: 'https://www.memesmonkey.com/images/memesmonkey/b8/b84a1746dd6c40559f5190e6f99b2eff.jpeg'}
]
   
storiesOf('meme List')
    .add('a bunch of memes', () => <MemeList collection={ramseyMemes}/>)
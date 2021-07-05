// 1# (first thing you always do when you work with react (components))
// import React from 'react';
import React from 'react';
// 2# import storiesOf from Storybook
import {storiesOf} from '@storybook/react';

import Meme from '../components/Meme';
import Clicker from '../components/Clicker';

// make a storiesOf followed by use the add()

storiesOf('First Story Ever!')
  .add('this is an h1 with hello world', () => <h1>Hello World</h1>)
  .add('this is a h2 with hi', () => <h2>Hi!</h2>)

storiesOf('p tag')
  .add('p tag with more info', () => <p>more info</p>)

// <Meme/> == Meme()
// Meme(img, title) <=== parameters
// <Meme img={"some image"} title={"Some Title"}/> <==== properties/props
const imgURL = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*';
const title  = 'Dogs need to rest to!'

storiesOf('Meme')
  .add('default meme', () => <Meme/>)
  .add('meme with props', () => <Meme img={imgURL} title={title}/>)
  .add('meme with props hardcoded in without variables',
    () => <Meme img={'https://ichef.bbci.co.uk/images/ic/1920x1080/p096tdsh.jpg'} title={'You Got This!!!'}/>)

//   to make story...
// stories off _____ <--- the name of the component
// add() specifies what sort of story/mock are you trying to show
storiesOf('Clicker')
  .add('default clicker', () => <Clicker/>)
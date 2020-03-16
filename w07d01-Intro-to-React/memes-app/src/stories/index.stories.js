import React from 'react';
import { storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import Meme from '../components/Meme';
import Title from '../components/Title';




storiesOf('Our App', module)
  .add( 'MEme Item 1', () => <Meme pic={'https://i.kym-cdn.com/entries/icons/mobile/000/016/030/carllll.jpg'} likes={32} name={'Coral meme?'}/>)
  .add( 'MEme Item 2', () => <Meme
                                pic={'https://i.chzbgr.com/full/9393093632/h266B0753/funny-and-cute-meme-about-a-parrot-bromance'}
                                likes={10}
                                name={'Parrot Meme'}
                              />)
  .add( 'MEme Item 3', () => <Meme/>)
  .add( 'MEme Item 4', () => <Meme/>)

  storiesOf('Title Stories', module)
    .add( 'Our Title first story', () => <Title>{[1,2,3,4]}This is the title and there are things in here !!!<li>Test</li><h2>information</h2></Title>)


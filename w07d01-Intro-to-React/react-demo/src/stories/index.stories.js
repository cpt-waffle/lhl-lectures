// Step 1:
import React from 'react';

// Step 2: import storiesOf

import { storiesOf } from '@storybook/react';
import Profile from '../components/Profile';

/// to write a story....

storiesOf('hello world component!', module)
  .add('default hello world!', () => <h1>Hello World</h1>)
  .add('another one!', () => <h1>another one!</h1>)

  ///////////////////////////////////////////////////

  //// Steps to take in building components in storybook
  // then moving it all, to your actual react all!


const dummyProfile = {
  name: 'Fake Name',
  title: 'Fake Title',
  img: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg'
}

storiesOf('Profile Component!', module)
  .add('default', () => <Profile profile={dummyProfile}/>)
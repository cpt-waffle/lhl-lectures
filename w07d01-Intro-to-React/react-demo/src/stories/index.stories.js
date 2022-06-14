// Step 1 
import React from 'react';
// Step 2
import { storiesOf } from '@storybook/react';

//Step 3 -- Import the component I want to add a story about
import Profile from '../components/Profile'
import Footer from '../components/Footer'

storiesOf('Testing Storybook for fun')
  .add('hello world', () => <h1>Hello World</h1>)
  .add('hi', () => <h1>Hi</h1>);


  
storiesOf("Profile")
  .add('Basic Story no props were passed', () => <Profile/>)
  .add('props wer passed in for profile', () => <Profile name={"Mr meows"}  title={'Lead Team Designer'} likesCount={4}/>)


storiesOf("Footer")
  .add('Basic Footer Example', () => <Footer/>)


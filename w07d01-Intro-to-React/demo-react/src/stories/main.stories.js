// import react 
import React from 'react'

// ____ THIS IS FOR STORYBOOK TO WORK!!!

import { storiesOf } from '@storybook/react';
import Navbar from '../components/Navbar'

storiesOf('Test')
    .add('Default Navbar', () => <h2>hello world</h2>)
    .add('Default Navbar 1', () => <h2>hi</h2>)
    .add('Default Navbar 2', () => <h2>hello</h2>)


storiesOf('Navbar')
    .add('Default Navbar', () => <Navbar/>)
    .add('Navbar with a prop title', () => <Navbar title="Fake LinkedIn App"/>)
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';

import Form from '../components/Form'
import Meme from '../components/Meme'
// Meme(....)
// Meme(img:'www.google.ca', num: 1, favorited: true)

// <% require(src/menu) %>
// createMeme(id, name, imgLink, comments, ...///)



storiesOf('Form', module)
    .add('Generic Form', () => <Form handleSubmit={action('handle-submit')}/>)

storiesOf('Meme', module)
    .add('Default meme', () => <Meme img="https://i.pinimg.com/originals/b8/2d/a4/b82da434ed0b91d1928e4877f4011753.jpg"/>)

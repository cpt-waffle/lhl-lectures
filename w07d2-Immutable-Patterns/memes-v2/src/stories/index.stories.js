import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';

import Meme from '../components/Meme';

// <% require(src/menu) %>
// createMeme(id, name, imgLink, comments, ...///)



storiesOf('MEMES TEST', module)
    .add('Getting a Default Meme to Appear', () => <Meme name={"Just Once..."} url={'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'}/>)
    .add('Empy Meme', () => <Meme/>)

import React from 'react';
import Meme from '../components/Meme';

import { storiesOf } from '@storybook/react';


storiesOf("RANDOM COMPONENT")
  .add('dasdasd', () => <h1>HELLO WORLD</h1>);


const fakeTitle = "Moon moon!";
const fakeImgURL = "https://external-preview.redd.it/ksfpBn1fKSP_1uPE1BG8BvWQgMG8sxASI9HSR4H2k-s.jpg?auto=webp&s=41e009bceb608d2d1c7d3f76d8bbdba09f4ceb26";

storiesOf("MEME Component", module)
  .add('Meme', () =>  <Meme name={fakeTitle} imgURL={fakeImgURL}/>);
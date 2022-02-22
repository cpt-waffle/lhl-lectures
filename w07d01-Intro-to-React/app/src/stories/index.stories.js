// import React
import React from 'react';

import { storiesOf } from '@storybook/react';

import ColorBox from '../components/ColorBox';

// TO ADD a story
// you will use the "storiesOf function"

storiesOf('Title Component')
    .add('Default Title', () => <h1>Hello World</h1>);


// Color box 
// -- pass in a a prop color, and a title 
//  -- render out a box with that title and the backgroun of it will be 
// -- the color you passed in
const foo = () => {
    console.log('bar');
}
// step 1 writting a story  --- storiesOf
// step 2 .add()
// Step 3 -- CREATE A COMPONENT!!!
storiesOf('Color Box Component')
    .add('box with blue color and title="WELCOME"', () => <ColorBox title="WELCOME" color={"blue"}/> )
    .add('box with red and title "CSS MANIPULATION"', () => <ColorBox title="CSS MANIPULATION" color="red"/>)
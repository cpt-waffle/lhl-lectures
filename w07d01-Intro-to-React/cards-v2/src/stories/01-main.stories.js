// Rules of Writing a Story
// Rule # 1 - Import React !!!!!!
import React from 'react';

/// import my components here
import Card from '../Components/Card/Card';
import Counter from '../Components/Counter/Counter';


///



// Rule # 2 - Writing stories - need to import storiesOf from storybook 
import { storiesOf } from '@storybook/react';

// Rule # 3 - using the storiesOf Function ( takes in the name of the story)
// .add() lets us add a specific rendering of something of each story. 
storiesOf('Random Gibrish')
    .add('A random Div', () => (<div>Hello World!!!</div>))
    .add('A random span', () => (<span>Pizza!!</span>))
    .add('A random nested tag', () => (<div><p>Hello World!!!</p></div>))

storiesOf('Apple')
    .add('Green Apple', () => (<div style={{color: 'green'}}>Green Apple</div>))

// card()
// card('hearts', 5)
let suitForCard = 'hearts';

storiesOf('Card')
    .add('Default Card', () => <Card/>)
    // PROPS
    .add('Selected Red Card', () => <Card suit={suitForCard} number={4}/>)
    .add('Seven of Diamonds with title', () => <Card suit={'diamonds'} number={7} showTitle={true}/>)


storiesOf('State')
    .add('state', () => <Counter/>)
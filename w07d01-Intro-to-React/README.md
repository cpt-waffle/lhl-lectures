## Component-Based UI w/ React

Today we will be talking about `React` and Integrating React Components.

#### Storybook

First we did is installed storybook to start building components in isolation.
We ran
`npx -p @storybook/cli sb init --type react` to install it.
to run storybook: `npm run storybook`.
We will be building all components in isolation before we start putting it toghether in our `App.js`

*NOTE:* `stories/index.sories.jsx` is not your main app! it is just where we will be writting our isolated components to later use in our main app.

We will be writting our isolated components stories in `stories/index.jsx`

here is the examples we did in lecture for reference:

```jsx
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ListItem from '../src/components/ListItem/';
import List from '../src/components/List/';

const item1 = "Buy Milk";
const item2 = "Teach react, and storyboard, and components and then get pizza!";

storiesOf('List Item', module)
  .add('Default Item', () => <ListItem itemName={item1} />)
  .add('Item with many many many words', () => <ListItem itemName={item2}/>)
  .add('Empty Item', () => <ListItem/>)

const emptyArr = [];
const fullArr = [
  'Buy Milk',
  'Learn React',
  'Buy Bitcoin'
];

storiesOf('List', module)
.add('Empty List', () => <List items={emptyArr}/>)
.add('Full List', ()=> <List items={fullArr}/>)
```

With React, it's an extension for XML-like code for elements and components.
JSX is alittle more stricter than HTML. We will have to these rules to write JSX correctly.

 - Rule 0  - All Tags MUST be closed.

```jsx
  // Rule number 1
  // import React from 'react';
  import React from 'react';
  import './card.css'
  const suits = {
      clubs: '♣',
      diamonds: '♦',
      hearts: '♥',
      spades: '♠',
  }

  // Rule Number 2
  // make a function, Capitalized (with the same name as your file)
  function Card(props) {
      console.log(props);
      // Rule number 4 ( not hard rule )
      // Component must return some sort of JSX

      //PITFALL must return one parent (WRAP IT ALL OF IT)
      // <%= urls.shortURL
      let greetings = 'hello world';

      // boolean && value ==> if boolean is true, value wil be returned otherwise nothing will be returned
      // boolean ? if true  : if false ===> if boolean is true, do if true, if false, do if false 
      return (
          <div className={'card' + ' ' + (props.color && 'red')}>
              <h2>{props.number ? props.number : 'A'}</h2>
              <h1 className="symbol">{props.suit ? suits[props.suit] : suits.spades}</h1>
              <h2 className="right">{props.number ? props.number : 'A'}</h2>
          </div>
      )
  }
  // Rule Number 3
  // EXPORT DEFAULT function you have made
  export default Card;
```

 - Rule 3 - All JSX expressions `MUST` have a parent (or root) element.

   ```jsx
   return (
      <div>
        <span>Name: Chuck Norris </span>
        <p>
          Chuck Norris threw a grenade and killed 50 people, then it exploded.
        </p>
      </div>
    )
   ```

#### Webpack and Babel

`Babel` - babel converts our react written components into ES2015+. Babel lets us use new features of JS that may not be supported by the browser. You can write your code in the new features, where then Babel will convert that said code into something that the browser understands.

`Webpack` - s a popular module bundling system built on top of Node.js. It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.

#### Live Coding

### NOTE: the rest of the notes are for reference if you get lost today in react!

We Will be making a ToDo list.

First thing is first, we need to dermined what components we will need.

`App`       - will be our main component that consists of the entire app.
`Hand`      - a hand to keep Cards
`Card`      -   a single card


Code examples from the live lecture:

#### Passing Props

To pass props into a component:

```jsx

<Card number={3} suit={'clubs'}/>

```

in this instance, the props are: `number` and `suit`. When we get into the The `Card` Component, we can see the props from:

```jsx

function Card(props) {
    console.log(props);
}

```
### Conditional Renderdering

```jsx
      return (
          <div className={'card' + ' ' + (props.color && 'red')}>
              <h2>{props.number ? props.number : 'A'}</h2>
              <h1 className="symbol">{props.suit ? suits[props.suit] : suits.spades}</h1>
              <h2 className="right">{props.number ? props.number : 'A'}</h2>
          </div>
      )
```

#### Fragments
```jsx
return (
  <Fragment>
    <p><Hello world/p>
  </Fragment>
);
```

Fragments are basically root tags for components. You should ONLY use them IF you do not need to style the component. (Fragments do not have className)

#### Managing State

We will use something called `React Hooks` to manage our state.
first thing, we need import `useState`.
Then we define a hook, we must remember it needes a deconstructer array, where it sets the value of the item to the first element of the array, followed by the function to use it to update the state
Then we can assign an event function to update the state and react will re-render the DOM for it.

```jsx
import React, { useState } from "react";

export default function example (props) {
  const [number, numberEvent] = useState(0);
  return (
    <div>
      {number}
      <button onClick={e => numberEvent(number + 1)}>Add +1 </button>
    </div>
  )
}
```
#### Looping Pattern

```jsx
    return (    
        <div>
            {props.cards.map((card) => <Card number={card.number} suit={card.suit} color={card.color}/>)}

            <h1>{number}</h1>
            <button onClick={addUp}>add</button>
        </div>
    )
```

#### Passing children with JSX

We can pass some child element(s) from one component to the other.

```jsx
import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <ul>
      <ListItem>I AM THE CHILD</ListItem>
    </ul>
  );
};

```


```jsx
export default function ListItem(props) {
  return (
    <li className="list-item">
      {props.children}
    </li>
  );
};
```

The code above will print out a single list item with "I AM THE CHILD" as the content:

 - I AM THE CHILD


#### Handing Events

Example of an event handler.

```jsx
const handleClick = () => {
  console.log("CLICKED!!!")
}

return (
  <div>
    <button onClick={handleClick}>Click Me</button>
  </div>
)

```

#### Controlled Inputs

```jsx
import React, { useState } from "react";

export default function List(props) {


  const [input, handleInput] = useState("");

  const handleForm = (evt) => {
    evt.preventDefault();
    props.addItem(input);
    handleInput("");
  }

  return (
    <form className="ItemForm" onSubmit={handleForm} >
      <input value={input} onChange={evt => handleInput(evt.target.value)} className="itemAdd" type="text"/>
      <button className="add-btn">Add</button>
    </form>
  )
}
```



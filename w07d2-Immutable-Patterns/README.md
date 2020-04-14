### Immutable Update Patterns

Today we will be talking about Immutable Patterns in react.

#### Benefits of Immutability

- It leads to a simpler programming and debugging as data that never changes is way easier to work than data is free changed to be watever it needs to be throughout the app.

- Having a copy the old ver and new ver of data, will always help to easy compare the two data's.

- If data cannot be mutated then nothing in the code can tamper with it which leads to less bugs.


#### The Wrong Way!!!

i have this react app that allows me to store items into an array. Pressing a button allows it to add another item into the `state`.

```jsx
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [items, addItem] = useState(['one', 'two']);

  const handleAddItem = () => {
    items.push('three');
    addItem(items);
  }

  return (
    <div className="App">
    {items.map( item => <li>{item}</li>)}
    <button onClick={handleAddItem}>ADD ME</button>
    </div>
  );
}

export default App;
```

Notice how we use `handleAddItem` function but nothing gets re-rendered. The idea is quite simple. We add an item into the `state` array. And then we tell react to use that state as the new state. React checks the state, seems that old and new are infact the same thing, and basically says, cool i wont re-render.

This is a bug!!

#### How to Fix!!

Using immutable state pattern, we make a duplicate of the sate and then we add an item to that, followed by setting to the new freshly craeted array, to the state.

```jsx
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [items, addItem] = useState(['one', 'two']);

  const handleAddItem = () => {
    const cloneItems = items.slice(); // COPY
    cloneItems.push('three');
    addItem(cloneItems);
  }

  return (
    <div className="App">
    {items.map( item => <li>{item}</li>)}
    <button onClick={handleAddItem}>ADD ME</button>
    </div>
  );
}

export default App;
```

Now we want to follow this pattern all around our react states. Always making a copy of a previous state, editing that, followed by a replace.

### Spread Operator (...)

What we did above is absolutely correct!! However its not elegant. Making a copy with splice, is old fashioned.

Enter the `spread` operator.

```js
// making a copy for arrays 
const array = [1,2,3,4,5];
const copyArr = [...array];

// making a copy for objects
const obj = {a:1, b:2};
const copyObj = {...obj};
```

#### Complex State

```js
function updateVeryNestedField(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}
```
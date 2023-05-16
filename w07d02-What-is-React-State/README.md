
## W7D2 -- What is React State

Its been a day since the intro to react! And we have learned a few new things so far.

#### Divide UI into Components

Instead of building big bulky HTML files, we have learned about splitting those files, into layouts. These pieces of layouts in react, we call `components`.

This is very simular to EJS templates we have done in the project `tinyapp`. The big difference that this is all `client-side rendered` (when the clients computer computer the UI). 

#### What about if we need to visually change things on the client side

Well we have already done that in our `tweeter` app. Think about to character counter and error handling. We did not have to refresh the page, but rather things just appeared to notify the user of various things that were happening in the UI.

### Consider the following code:

```js
$(() => {
    console.log('ready');
    $('#likes-btn').on('click', () => {
        console.log("pressed");
        const number = Number($('#likes-count').text());
        console.log(number);
        $('#likes-count').text(number + 1);
    })
})
```

```html
 <button id="likes-btn">Like</button><h4 id="likes-count">3</h4>
```

The JS code would be mounted after the button was rendered in. Then when a click has happened we would find the `id` and change the value by incrementing the number by 1, changing the button from `3` to `4`.

### How would this be done in React?

Well we would assume because everything gets rendered as `JSX` we can easily make a variable and make it change visually on the render 

```jsx
const Component = props => {

  let number = 0;

  const addOne = () => {
    number = number + 1;
  }

  return (
    <div>
      <h1>Number is {number}</h1>
      <button>Click Me</button>
    </div>
  )
}

export default Component
```

### But how do we trigger an event let say on a button?  Event Listeners!!

We would need to attach an event on a button, whenever its clicked we use the function to increment the number. now in `JQuery` you need to attach based on an ID, or Class using: 

```js 
$('#likes-btn').on('click', () => { ... }
```

But with React it is alot more easier:

```jsx
const Component = props => {

  let number = 0;

  const addOne = () => {
    number = number + 1;
  }

  return (
    <div>
      <h1>Number is {number}</h1>
      { /* look below*/}
      <button onClick={addOne}>Click Me</button> 
    </div>
  )
}

export default Component
```

Every HTML element in react has event listeners, and all we need to do is pass a function to trigger on that event listener. It is possible to define a function right in it, but if the function is too long, it is a better practice to make it outside of the render like we have with the `addOne`.

For a list of full event listeners, you can visit:

[React Events](https://react.dev/reference/react-dom/components/common).

#### We did all that and the number is not Changing... Why

```js
  const addOne = () => {
    console.log(number)
    number = number + 1;
  }
```

We may point to our logic being the problem, but if `console.log()` the `number` variable, does indeed change, but visually, the react component keeps it as the `number` variable was declared.

The issue is with react rendering cycle.  Once the component has been mounted and rendered, it does not change, no matter what variables change. We can increment,decrement and even replace entire arrays with different arrays, the component will not show you that change. 

This is where state comes in.

### What is State? (Just the theory, code example lower)

React state, is a special kind of a variable that comes with its own method. This variable is only `allowed` to be changed but this method. When that method is triggered and the value is given to change, the function will trigger a component `re-render` causing the visual representation in the browser to change. 

### How do I make a state and use it?

well first you will need to import a function called `useState` from react. We call this function a `hook` because this function `hooks into` the component, controlling react features ( one of the features being, `state changes`).

Then we will declare state in our component:

```jsx
// step 1:
import React, {useState} from 'react';

const Component = props => {
  // step 2:
  const [num, setNum] = useState(0);

  let number = 0;

  const addOne = () => {
    number = number + 1;
  }

  return (
    <div>
      <h1>Number is {number}</h1>
      { /* look below*/}
      <button onClick={addOne}>Click Me</button> 
    </div>
  )
}

export default Component
```

Lets breakdown this line:

```jsx
// first parameter:   num   --> the state
// second parameter:  setNum -> the function to change the state
  const [num, setNum] = useState(0);
  //                             ^-- initial declaration of state 
```

Now we are not just done yet, we must make sure we use the function to change state, NEVER changing state directly.

```jsx
import React, {useState} from 'react';

const Component = props => {

  const [num, setNum] = useState(0);

  let number = 0;

  const addOne = () => {
    number = number + 1;
    // use setNum to change state by giving it a value 
    setNum(99);
  }

  return (
    <div>
      <h1>Number is {num}</h1> {/*<------- change number to num */}
      <button onClick={addOne}>Click Me</button> 
    </div>
  )
}

export default Component

```

Clicking the button now will change the `num` state, visually on your app, to `99`.
But we want this to increment so lets refactor the code:

```jsx
import React, {useState} from 'react';

const Component = props => {

  const [num, setNum] = useState(0);

  let number = 0;

  const addOne = () => {
    // never change state directly
    // wrong: number++
    // wrong: setNum(number++)

    // correct: 
    setNum(num + 1);
  }

  return (
    <div>
      <h1>Number is {num}</h1> {/*<------- change number to num */}
      <button onClick={addOne}>Click Me</button> 
    </div>
  )
}

export default Component
```

### Lifting State up

Sometimes we want to share a state between 2 components. Consider the following:

```jsx
import React, {useState} from 'react';

const Component = props => {
  return (
    <div>
      <ComponentButton/>
      <ComponentButton/>
    </div>
  )
}

export default Component

```

Assume each `ComponentButton` has a state where each of these is being displayed. how many times each one was clicked. What if we want to share the values between the 2 and show how many times both of those buttons were clicked (sum of both clicks)

The problem with state, you cannot pass it up from a Child component to a parent. But you can pass props `down`. 

So the term `lifting state up` means that we simple move up the state to its closest common parent component, to `share` that state with the `children` components.


```jsx
import React, { useState } from 'react';

const Component = props => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const onClickNum1 = () => {
    setNum1(num1 + 1);
  }

  const onClickNum2 = () => {
    setNum2(num2 + 1);
  }

  return (
    <div>
      <ComponentButton val={num1} onButtonClick={onClickNum1}/>
      <ComponentButton val={num2} onButtonClick={onClickNum2}/>
    </div>
  )
}

export default Component

```
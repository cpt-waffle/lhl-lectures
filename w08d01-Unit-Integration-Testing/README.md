#### W8D1 - Integration Testing

**Unit testing** means testing individual modules of an application in isolation (without any interaction with dependencies) to confirm that the code is doing things right.

**Integration testing** means checking if different modules are working fine when combined together as a group.

**Functional testing** means testing a slice of functionality in the system (may interact with dependencies) to confirm that the code is doing the right things.


#### Why Do We Write Tests

- to protect our codebase
- to make sure that we push less bugs to production ( or no bugs if it happens)
- to protect features that aready that have been made , so that the feature you are making, doesnt break the other parts of the codebase

##### Integration Testing with JEST and @testing-library/react

You already have have been using `JEST` but its time to start testing out components.
We will be using some of `@testing-library/react` tools to help us out.

make sure to install it

`npm install --dev @testing-library/react`

The tests we ran through ( and made ) are here.
Remember to import `React`, the component you are testing and `render`, `fireIEvent`


Testing the Item Component

```js
import React, { useState } from 'react';
import Item from '../Components/Item';

//render <- to do render of the component
//fireEvent <- for clicking
import { render, fireEvent } from '@testing-library/react';

describe( "items", () => {
  //xIt
  //test vs it ( same thing )

  it('The Component mounts', () => {
    // render returns an object with a bunch of functions that will let us query the DOM
    render(<Item item={'buy apples'} done={false}/>)
  })

  it('should have "buy apples" text', () => {
    // render returns an object with a bunch of functions that will let us query the DOM
    const { getByText } = render(<Item item={'buy apples'} done={false}/>)
    // should find the text "buy apples"
    expect( getByText('buy apples') )
  })

  it('should have be className "todo-item"', () => {
    // Container has alot of methods that gives us ways to traverse the Item DOM
    const { container } = render(<Item item={'buy apples'} done={false}/>)
    // our item should have a className todo-item which we can get out firstChild
    expect(container.firstChild.className).toBe('todo-item')
  })

  it('should have be className "todo-item"', () => {
    // Container has alot of methods that gives us ways to traverse the Item DOM
    const { container } = render(<Item item={'buy apples'} done={false}/>)
    // our item should have a className todo-item which we can get out firstChild
    expect(container.firstChild.className).toBe('todo-item')
  })

  it('It should be unchecked"', () => {
    // Container has alot of methods that gives us ways to traverse the Item DOM
    const { container } = render(<Item item={'buy apples'} done={false}/>)
    // our item should have a className todo-item which we can get out firstChild
    expect(container.firstChild.children[0].checked).toBe(false)
  })

  it('Clicked! Should be checked now', () => {
    //  but more of show you how to click an event
    let status = false;
    const { container } = render(<Item item={'buy apples'} done={status} toggleDone={() => status = true }/>)
    fireEvent.click(container.firstChild.children[0])
    console.log(container.firstChild.children[0].checked)
    expect(status).toBe(true)
  })


})
```


Testing the App component.
```js
import React from "react"
import { render, prettyDOM, fireEvent } from '@testing-library/react'
import App from '../App'


describe('App tests', () => {
  it('renders with no issue', () => {
    expect(render(<App/>))
  })

  it('has a list Item with 6 items in it', () => {
    const {container} = render(<App/>);
    expect(container.firstChild.children[1].children.length).toBe(5)
  })
  it('it has item with do some testing', () => {
    const {container, getByText } = render(<App/>);
    expect(getByText('do some testing'));
  })

  it('Pressing Enter when empty', () => {
    const { container , getByText } = render(<App/>);
    fireEvent.click(getByText('Add'));
    expect(getByText("Item cannot be Blank!"))
  });
})
```


Some more extensive notes from [Francis](https://github.com/FrancisBourgouin/lhl-12-w8d1)
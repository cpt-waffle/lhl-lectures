#### W8D3 - React - Next Steps

Congradulations on finally finishing react today!!! Its been quite a journey but you have learned alot.

So far you have learned:

- react (itself)
- state ( useState )
- useEffect ( and/or life cycle of the app )
- JEST
- Cypress
- end to end testing
- Selector pattern

Today we are gonna cover for what comes __next__ after all the stuff you have learned before.

We are going to `re-build` tiny app (front-end only, but if we have time we will make the server)

### `styled-components`


First we looked into (quick demo) - react styled components

`npm install --save styled-components` or
`yarn add styled-components`



Basic use case to make a button
```jsx
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.color ? props.color : 'red'};
`
export default (props) => {

  return (
      <Button {...props}>{props.children}</Button>
  )
}
```

To use it as an export

```jsx
import React from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Button color={'green'}>My Component</Button>
    </div>
  );
}

export default App;
```

### Third Party Libraries

- [MATERIAL UI](https://material-ui.com/)
- [Best React UI Component Libraries for 2020](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)


We then used material UI to make some of our demo app.


### Class Based Components

We also quickly looked class based structure of making a react component



#### What is a Component?

```jsx
import React, {Component} from 'react';

class Hello extends Component {
  //...

  // must have a render function
  render() {
    return (
      <div>
        <h1>
          Hello World :D !!!
        </h1>
      </div>
    )
  }
}
// if you are planning to use this component as an import, you must export it.
export default Hello;
```

Components are just peices of visual bits that we will create in order to build our apps. Components are also reusable. Some examples of components are: `NavBar`, `Menu`, `MenuItem (item inside of a menu`, `Card(a picture with some text)`, etc.

To create a react component we must define a `class` with a class name, which extends `Component`
ie:

```
import React, {Component} from 'react';

class SomeComponent extends Component {
  //...
}

export default SomeComponent;
```

### React Router

Finally we Looked into react router. This 3rd party library that helps you conditionally render components, that act like seperate pages. In short it makes your SPA have multiple pages without refresh!

[React Router Docs (VERY EASY TO READ)](https://reacttraining.com/react-router/web)

#### Netlify and SPA

We finally did a quick deploy to netlify and looked into making the app into an SPA (Remeber the `service worker`). By enabling this (or by setting a service worker up, assuming you are not using create react app), you are now letting your app be saved to a phone. You can also now push notifications to the phone!

#### Things to look into afterwards?

 - [Learn context in 5 min ](https://www.freecodecamp.org/news/react-context-in-5-minutes/)
 - [Youtube link to a good tutorial on context](https://www.youtube.com/watch?v=6RhOzQciVwI)
 - [All other Hooks](https://reactjs.org/docs/hooks-reference.html)
 - [Web sockets Tutorial](https://blog.bitlabstudio.com/a-simple-chat-app-with-react-node-and-websocket-35d3c9835807)

One suggestion from Alumni ( and me ) if you need to do some practice on your own for react but do not have a good project to start with: Make a resume site for yourself in `React`!! its a fun, and small project that you can explore!!
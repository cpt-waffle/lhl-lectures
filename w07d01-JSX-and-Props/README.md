### JSX and props


### What is JSX

JSX stands for JavaScript XML. It is an extension syntax used in React, a popular JavaScript library for building user interfaces. JSX allows you to write HTML-like code within JavaScript, combining the power of JavaScript and the expressiveness of HTML-like syntax.

JSX provides a concise and familiar syntax for describing the structure and appearance of UI components. It resembles HTML but is not actually HTML. JSX elements are transformed into regular JavaScript function calls that create React elements.


```jsx
const element = <h1>Hello, world</h1>;
```

JSX code `<h1>Hello, JSX!</h1>` creates a React element that represents an <h1> heading with the text "Hello, JSX!". This JSX code is then transformed into the following JavaScript code:

```jsx
const element = React.createElement("h1", null, "Hello, JSX!");
```

### Making a Components

Some rules to follow when making a component in react.

#### Making a file component

To make a component, make a file with capital first letter. Then make a function in that file that is the `same name` as the file.  Afterwards make sure that function gets exported (preferable `export default` for now).

```jsx
// file called Component.js

const Component = () => {

}

export default Component;

```

This function should return something to render, usually JSX.

```jsx
const Component = () => {
  return (
    <div>Hello Component</div>
  )
}

export default Component;
```

The component must return one PARENT html element that encloses all the other children.

HTML/JSX syntax will matter, because if something is missmatched, react will not compile it. 


### Props

`Props` is short for properties. Props are a way to pass data from a parent component to a child component. They allow you to configure and customize components dynamically by providing values or functions as attributes.

Here's an example of how props can be used in React:

```jsx
// Parent component
function App() {
  return <ChildComponent name="John" age={25} />;
}

// Child component
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

In the example above, the App component is the parent component, and the ChildComponent is the child component. The name and age attributes are passed as props from the parent component to the child component.


Props enable you to create reusable and customizable components by providing different data and behaviors to them based on the needs of the parent components.


### Conditional Rendering

Conditional rendering in React allows you to show or hide components or elements based on certain conditions. Here are a few examples of conditional rendering in React:


```jsx
function App() {
  const greetings = true;

  return (
    <div>
      {greetings ? <h1>Hello!</h1> :<h1>Go Away</h1>}
    </div>
  );
}

```

In this example, the `<h1>Hello!</h1>`is rendered if `greetings` is true, otherwise the `<h1>Go Away</h1>` is rendered.


### More Examples:

(explanation below the code)

```jsx
const DemotivationalPoster = (props) => {
  console.log(props);
  const img = "https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg";


  return (
    <div className="poster">
      <img className="poster--img" src={props.img ? props.img : img}/>
      <h2>{props.title || 'no title :('}</h2>
      <p>{props.desc || 'no description :('}</p>
    </div>
  )
}

```
This component uses turnary operator to render either the `img variable` , or the `prop.img`.

the `||` operator works the way that, if the left side of the `||` is `falsey` then the right side will be rendered.


### Looping through data and display it as many components

```jsx

  const  array = [
    {id: 1, title: 'my title', desc: 'my desc'},
    {id: 2, title: 'aaa', desc: 'aa'},
    {id: 3, title: 'bbb', desc: 'bb'},
  ];

const App = () => {

  /////////// DONT DO THIS
  // const posters = [];

  // for (let obj of array) {
  //   posters.push(<DemotivationalPoster title={obj.title} desc={obj.desc}/>)
  // }

  //////// DO THIS

  const posters2 = array.map((obj) => {
    return <DemotivationalPoster key={obj.id} title={obj.title} desc={obj.desc}/>
  })
  return (
    <div>
    {posters2}
    </div>
  )

}
```

In React, it is common to use the map function instead of a traditional for loop when rendering lists or arrays of data. There are several reasons why using map is preferred in React:

- Simplicity and readability: The map function provides a more concise and expressive way to iterate over an array and transform each element into JSX components. It simplifies the code and makes it easier to understand.

- Immutable data: React promotes immutability, which means that the original data should not be modified directly. The map function creates a new array with the transformed elements without modifying the original array.

- Integration with JSX: The map function integrates well with JSX syntax. It allows you to map each element in an array to a corresponding JSX element without the need for manual concatenation or building complex HTML strings.
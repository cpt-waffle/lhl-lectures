#### W7D2 - Data Fetching & Other Side Effects

Today we talked about react and hooks ( mainly `setState` and `useEffect`). The first thing we gone over is the rules of react hooks.

#### Quick Review on yesterdays Work

 - in class review on `props`
 - in class review on `setState`

##### Rules of React Hooks

[Rules of React hooks](https://reactjs.org/docs/hooks-rules.html)

- **Rule 1:** Only Call Hooks at the Top Level.

**Don’t call Hooks inside loops, conditions, or nested functions.** Instead, always use Hooks at the top level of your React function.

- **Rule 2:** Only Call Hooks from React Functions.

### UseEffect

[UseEffect Docs](https://reactjs.org/docs/hooks-effect.html)

Today, we learned about the new hook `useEffect`. This hook allows us to add side effects to our components.

#### What are Side Effects

Think of it as, when an action occurs, a reaction will happen. Very simularly, in react context, when a component mounts, something sort of action can potentialy be fired ( which in our case is controlled by the `useEffect`). In short, React encapsulates side effects with `useEffect`.

setting up `useEffect` like this will fire the app any time its re-rendered ( whenever theres a state change)

```js
useEffect( () => {
  console.log("welcome")
})
```

setting up `useEffect` like this will make the app only ONCE ( only on first `render`)

```js
useEffect( () => {
  console.log("ONLY ONCE")
}, [] )// notice the empty array
```

setting up `useEffect` like this make the app render only when the state `siren` changes

```js
useEffect( () => {
  console.log("woop woop")
}, [siren] )// notice the array now has one value which is a state
```

#### PITFALL

The fact that the effect re-execute after each render might cause an **infinite loop**. This can be done like this

```js
useEffect( () => {
  console.log("TO INFINITY AND BEYOND!!!!")
  setValue(12) // setValue alters the value state
}, [ value ] )// value is a state
```

![infinity](https://media3.giphy.com/media/1lDDbtArVOHPrERDf2/giphy.gif)

useEffect runs initial when the state gets set, then `useEffect` sets the state, which then runs `useEffect` which then runs `useEffect` which then sets the state...... ( etc etc etc ). Make sure to avoid this as this is very bad. We never want infinite loops.


#### Data Fetching ( With Express Backend )

Today will be the first day you will be figuring out how to data fetch information, from a backend server to your `react` app. Enter a new library called `axios`

[AXios Docs](https://github.com/axios/axios)

Just like `ajax`, axios is a library  will be used to make `GET` and `POST` calls to the backend


We did a quick example of this in the server-demo folder.


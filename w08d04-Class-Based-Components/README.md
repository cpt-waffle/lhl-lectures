#### Class Based Components

Today we will be looking at `legacy` way to write react components.


A functional component is a `Javascript` function that takes a single parameter(props)and returns a component. 


#### Overview: Class Based

```jsx
const World = props => {
	return (
		<div>
			<hello world/>
		</div>
	)
}
```

A `class` component is a bit different. You have to make an `instance` of a class derived from `Component` class. The class MUST implement the `render()` function which returns a react Component.

```jsx
class World extends Component {
	render() {
		return (
			<div>
				<hello world/>
			</div>
		)
	}
}
```

#### Overview: Class - Prop Passing

Using `the` constructor, we can get props passed into our component. 

```jsx
class World extends Component {
	constructor(props) {
		super(props);
		console.log(props)
	}

	render() {
		return (
			<div>
				<hello world/>
				{this.props.name}
			</div>
		)
	}
}
```

**Notice:** the `this` keyword. Due to the fact of the scope of variables, We use the `this` keyword to get values like `props`, `state`, and function calls that we may define.

#### Overview: Class - State

Other than props, components can have state.

```jsx
class World extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1
		}
	}

	addNum = () => {
		this.setState(prev => {...prev, num: prev.num + 1})
	}


	render() {
		return (
			<div>
				<hello world/>
				{this.props.name}
				{this.state.num}
				<button onClick={addNum}>Click Me</button>
			</div>
		)
	}
}
```


#### Overview: Class - Life Cycle Methods

```jsx
class World extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1
		}
	}

	addNum = () => {
		this.setState(prev => {...prev, num: prev.num + 1})
	}
  	componentDidMount() {
  		//...
  	}
  	componentDidUpdate(prevProps, prevState, snapshot) {
    	//...
  	}
  	componentWillUnmount() {
    	//...
  	}

	render() {
		return (
			<div>
				<hello world/>
				{this.props.name}
				{this.state.num}
				<button onClick={addNum}>Click Me</button>
			</div>
		)
	}
}
```

Lifecycle methods can be used to `GET` the data from  servers, set States, and free components when they are unmounted. 

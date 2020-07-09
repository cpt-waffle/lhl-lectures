#### Custom Hooks

Today we talked about custom hooks.

The idea of a custom hook is logic re-usability. Imagine you have a state, that has logic built in that you cause in a component somewhere else. Well now you can take state and refactor it into its own file. You can then pass that state into multiple files as a `new` instance, and have all the logic written.

If we have a component
```jsx

function Button(props) {
    const [num, setNum] = useState(0);

    const increaseNum = () => {
        setNum(num+1);
    }

    const increaseNum = () => {
        setNum(num+1);
    }

    return (
        <div>
            {num}
            <button onClick={increaseNum}>Click me up</button>
            <button onClick={decreaseNum}>Click me down</button>
        <div/>
    )

}

//...
```

We can refactor the state into a different hook and make our component alot 
smaller in code.

useVisualButton
```jsx
import { useState } from 'react';


export default function useVisualButton(initial) {
    const [num, setNum] = useState(initial);

    const increaseNum = () => {
        setNum(num+1);
    }

    const decreaseNum = () => {
        setNum(num+1);
    }



	return { num, increaseNum, decreaseNum }
}

```

we can then import it into our Button component


```jsx
import useVisualButton from '../../hooks/useVisualButton';

any artists in the 
            {num}
            <button onClick={increaseNum}>Click me up</button>
            <button onClick={decreaseNum}>Click me down</button>
        <div/>
    )

}

//...
```

#####  Does this code works the same way?

Yes! it works exactly the same. We did not make any changes to the logic. Custom hooks are a `convention`.

##### Do I have to name my Hook starting with use word? 

Yes! it is also a convention that we follow.  Without it, we wouldn’t be able to automatically check for violations of rules of Hooks because we couldn’t tell if a certain function contains calls to Hooks inside of it.

##### Do Two Components using the same hook logic share state?

No this is not a global state mechanism. Everytime you declare a the hook its a new instance!!!!

### Some more Rules

 - Only call Hooks from the top-level of a function component or a custom Hook.

 - Cannot be called in React class components, loops, if statement, regular function, in event handlers

 - A custom Hook can call other custom or built-in Hooks.
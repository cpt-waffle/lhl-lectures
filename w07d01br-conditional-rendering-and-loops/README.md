### Conditional Rendering and Loops (Multi Components)

Today in the lecture we learned about react, how to build components
and how to work with storybook.

This breakout we will be working on Conditional Rendering and how
we can loop through items in an array to create Components.


### Conditional Rendering

Sometimes we want to render something based on a certain condition

for example take this code:


```jsx
function UserInfo() {
    return <h1>Welcome foo@bar.ca!</h1>
}

function Login() {
    return (
        <h1>You are not Logged in!</h1>
    )
}
```

Well to conditional render this you would write:


```jsx
function Navbar() {
    const isLogged = false;
    return (
        {isLogged ? <UserInfo/> : <Login/>}
    )
}

```

This is what we call a turnary operator:

`condition ? if condition true do this : else do this `


We can also use the double && to render items if they exist

```jsx
{isLogged && <Login/>}
```

This acts like an if statment where if `isLogged` is true, than Login will render.


### Looping through Components!

Sometimes we have to make a list of same exact components.

Imagine a list items from a shopping cart, they use the exact same Component called <Item/>


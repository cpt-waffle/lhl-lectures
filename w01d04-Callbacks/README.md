## Functions and Callbacks

Today's lecture will focus on functions and callbacks. We will first talk about functions.

### What Are Functions??

A procedure that executes and peformances a certain task. Functions could take parameters and use them to do
the said procedure.

#### What We Notice When We Write Functions

A Function can have:

- Arguments    ( values that are being passed into a function )

- Return Value ( Something being given back after the procedure has been done )

- Side Effects ( the function has manipulated something in our program )

### Function Expression - Expression that evaluates to a function

```js
var hello = function() {
  console.log('hello world');
}
```

### Function Declaration - The function definition

```js
function hi() {
  console.log('Hi!');
}
```

### Function Evacation - Call our functions

```js

hello();
hi();
```


Functions (are first-class objects and )can be


- Created at runtime.
- Assigned to any data structure (arr, obj, etc)
- Take in arguments - ( strings, numbers, arrays AND *OTHER FUNCTIONS* )
- Returned back from a function


A function that either accepts a function as an argument, and/or returns a function can be called a *higher order function*.

### Callbacks

- A callback function is a function, that is a parameter that goes into another function (high order function).
- The high order function may call that function.

```js
//Backward takes in an array and a callback function defined as func
function backward(array, func) {
  for (var i = array.length - 1; i >= 0; i--) {
    func(array[i]);// we call our callback function now!
  }
}
//                                                     We Define our function right at the parameter as an anonymous function!
backward(['hello', 'lighthouse labs', 'and', 'world'], function(word) {
  console.log("the element is =>",  word);
});
```


### Why write Higher-order functions? What's the rationale?

[Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).

### Lets Break it all Down

Lets make a program that prints each item in an array.

Our first iteration could be this.

```js
const array = [1, 2, 3];
for (const item of items) {
  console.log(item);
};
```

We then want to rewrite it as a function, So it can be more modular.

```js
const logEach = function(items) {
  for (const item of items) {
    console.log(item);
  }
};

```

...But if we want something more abstract and single-purpose

```js
const forEach = function(items, action) {
  for (const item of items) {
    action(item);
  }
};
```


### Bonus

Some functions will take a long time to get information. Because js is async, we pass a callback to get the value when its ready.

```js

function addTwo(number, cb) {
  let num = undefined;
  // simulation of time
  setTimeout(function() {
    num = number + 2
    cb(num);
  },
  3000)
  // Will be undefined because timeout hasn't executed yet.
  // return num
}

addTwo(6, function(number) {
  console.log("The number is :  ", number)
})
```

Helpful Tools

If you want to track how your code executes, use this tool
http://www.pythontutor.com/visualize.html#mode=edit
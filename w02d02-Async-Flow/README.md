#### Async Control Flow

Today we will be covering te topics of "what is async control flow" and "how do we use this".


First thing is first, some review.

#### Functions

A function is a resusable block of code that we call upon, pass parameters and recieve back calculated output.

##### Declarative Function

```js
function foo() {
  return 'bar'
}
```

##### Expression Function

```js
const foo = function() {
  return 'bar';
}

// OR es6

const foo = () => 'bar'; // one line return
```

##### High Order Function and Callbacks

A Callback s a function passed into another function as an argument.

A high order function, is a function that takes a function as a parameter.

```js
// high order function
const map = (arr, cb) => {
  let result = [];
  for (let element of arr) {
    result.push(cb(element));
  }
  return result;
}

const arr = [1,2,3,4,5,6,7,8,9];
                     // callack function
console.log(map(arr, (x) => x * 2));
//2,4,6,8,10,12...
```

#### Async vs Sync

![waiter](https://static.turbosquid.com/Preview/2019/10/04__14_28_52/waiters_main_00.jpg0AD9CC84-5F2B-458B-B7E6-F954D9A95EE0Zoom.jpg)

A synchronous waiter would take an order from a customer deliver it to the cooks and then wait for the food to finish before taking another order.

A more typical waiter is asynchronous. They take a customers order, deliver it to the chef then continue to take orders until the food finishes, at which point they give the meal to the customer.

#### Event Loop

![eventLoop](https://i.stack.imgur.com/BTm1H.png)

Node is single threaded which means only one operation at a time can occur. However when something takes longer than it should ( like reading a file, or waiting for input, or getting information from a server ) node will simply put it in the event queue, and will keep going with the main code. Once main is finished, it will go back and check if anything finished on the event queue, and if it did, then it will output that.

```js
console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');
// BEFORE CALL
// AFTER CALL
// INSIDE CALL
```

##### Demo's

What is the output of these code snippets?

```js
let x = 1;
console.log('BEFORE CALL: ', x);

setTimeout(() => {
  x = 2;
  console.log('INSIDE CALL: ', x);
}, 1000);

console.log('AFTER CALL', x);

// BEFORE CALL: 1
// INSIDE CALL: 1
// AFTER CALL: 2
```
Sleep Sort

```js
const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];

const sleepSort = function(nums) {
  for (const num of nums) {
    setTimeout(() => console.log(num), num);
  }
}

sleepSort(numbers);
/*
0
1
-500
-50
2
52
59
81
310
603
900
1006
3630
*/
```

High Order Func

```js
const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data.initials = "YAV";
    callback();
  });

  console.log('AFTER TIMEOUT CALL');
}

console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})
console.log('AFTER MAIN CALL');

// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL
// AFTER MAIN CALL
// INSIDE CALLBACK
```
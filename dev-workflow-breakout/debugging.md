### Debugging Breakout

Today you a lecture on how to do a dev workflow,
we'll be having a follow up on that. 


### More than just console.logs!

For debugging we use alot of `console.log` functions to help us out in finding bugs and issues. 
But there are other `console` tools that you can use to help us get even better.
For example:

`console.group`     - increases indentation of all `logs` 
`console.groupEnd`  - stops indentation when `console.group` was started

Example: 

```js
console.group('loop');
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.groupEnd('loop');
// loop
//   0
//   1
//   2
//   3
//   4
```

`console.count`       - counts a string repetition
`console.countReset`  - resets the count for the string repetition

Example:

```js
for (let i = 0; i < 5; i++) {
  console.count("cycle");
}
console.countReset("cycle");

// cycle: 1
// cycle: 2
// cycle: 3
// cycle: 4
// cycle: 5

```

`console.time`        - starts a timer that can be used to to compute the duration of operation
`console.timeEnd`     - stops the timer and prints the result

Example:

```js
console.time("loop");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd("loop");

// 0
// 1
// 2
// 3
// 4
// loop: 4.399ms
```

`console.table`        - ties to construct a table with the columns of tabularData with rows of actual data

Example: 

```js
console.table([1,2,3,4]);

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   1    │
// │    1    │   2    │
// │    2    │   3    │
// │    3    │   4    │
// └─────────┴────────┘

console.table({a:1,b:2});

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    a    │   1    │
// │    b    │   2    │
// └─────────┴────────┘

console.table([{a:1}, {b:2}]);

// ┌─────────┬───┬───┐
// │ (index) │ a │ b │
// ├─────────┼───┼───┤
// │    0    │ 1 │   │
// │    1    │   │ 2 │
// └─────────┴───┴───┘

```

### Colorful console.logs!

We have alot of different external libraries we can use to help `console.log` even better, but no library `node` (vanilla node) allows us to give color to our `console.log`s

Example: 

```js
  constReset = "\x1b[0m"; // need a reset because the color will carry over to the next console.log
  constFgBlack = "\x1b[30m";
  constFgRed = "\x1b[31m";
  constFgGreen = "\x1b[32m";
  constFgYellow = "\x1b[33m";
  constFgBlue = "\x1b[34m";
  constFgMagenta = "\x1b[35m";
  constFgCyan = "\x1b[36m";
  constFgWhite = "\x1b[37m";

console.log(constFgGreen);
console.log("this is green");
console.log(constReset);
console.log("back to normal!");

// It is alot of lines of code though so we can make this shorter by...
console.log(constFgGreen, "this is green", constReset)
console.log("back to normal!");

```

You can also change things like background color, and even make your font `blink`
For full variable names, here is an `object` of all the values

```js
const _colors = {
  Reset : "\x1b[0m",
  Bright : "\x1b[1m",
  Dim : "\x1b[2m",
  Underscore : "\x1b[4m",
  Blink : "\x1b[5m",
  Reverse : "\x1b[7m",
  Hidden : "\x1b[8m",

  FgBlack : "\x1b[30m",
  FgRed : "\x1b[31m",
  FgGreen : "\x1b[32m",
  FgYellow : "\x1b[33m",
  FgBlue : "\x1b[34m",
  FgMagenta : "\x1b[35m",
  FgCyan : "\x1b[36m",
  FgWhite : "\x1b[37m",

  BgBlack : "\x1b[40m",
  BgRed : "\x1b[41m",
  BgGreen : "\x1b[42m",
  BgYellow : "\x1b[43m",
  BgBlue : "\x1b[44m",
  BgMagenta : "\x1b[45m",
  BgCyan : "\x1b[46m",
  BgWhite : "\x1b[47m",
};
```

## Debugging the Problem Steps

`Break down the problem` - instead of attacking the whole problem head on, break it down into minature pieces and solve them one by one.

`Do the knows` - do what you know, first, or write down what you know how to do

`ask and/or research what you are not sure` -  if you know the knows, time to research the unknowns, if you cant find a question, ask someone to help you out ( mentor or senior, etc)

`go step by step and try to work through the problem` - from the break down, start working on each piece of the problem, and then eventually try to complete the task

`clean up` - clean up any console logs, any debugging code


#### TDD with Mocha & Chai

Today we will be talking about Test Driven Development, or TDD for short.


### Test Driven Development

The idea of TDD is that the tests are developed for your code before actually writing the code. Think of it as this: You are packing for a trip and you are considering what you want to take. Instead of getting to your location and then figuring out what you actually brought and dealing with the conseqeuences of being unprepared.

The TDD process follows

 - Start by writing a test(s), and a tiny piece of code just so that we can run the tests on it!
 - Run the test(s). They should all `fail`. IF they dont fail, chances are tests arent good enough since you should have no code ( or min code just to run)'
 - Start coding incrementaly, making each test pass without breaking the consequitive one
 - Once all tests pass, think of any other edge cases and write those tests as well
 - Now once all tests have passed everything, you are done ( for now )

#### The Problem:

Lets write a function that takes in 2 arrays, and check if both arrays are equal, if they are return `true` else returns `false`.

```js
// Just enough to run the function
const equalArrays = (arrOne, arrTwo) => {
  return 0;
}
```

### Module Exports

You might be thinking now: "This is enough to write the tests, lets run some tests!", however lets take a quick stop and think about where should we write them. If we start looking into re-usbale code we should modularize this function. We can keep our function as one file, to keep things nice and separated, and just `require` it out to another file.

if we add to our equalArrays File:

```js
// Just enough to run the function
const equalArrays = (arrOne, arrTwo) => {
  return 0;
}

console.log(module);
```

You will get some gigantic object that looks like this

```js
Module {
  id: '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/demos/1/equalArrays.js',
  path: '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/demos/1',
  exports: {},
  parent: Module {
    id: '.',
    path: '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/demos/1/test',
    exports: {},
    parent: null,
    filename: '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/demos/1/test/test.js',
    loaded: false,
    children: [ [Circular] ],
    paths: [
      '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/demos/1/test/node_modules',
      '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/demos/1/node_modules',
      '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/demos/node_modules',
      '/home/cptwaffle/Projects/lhl/lhl-lectures/w02d01-TDD-With-Mocha-n-Chai/n$de_modules',
      '/home/cptwaffle/Projects/lhl/lhl-lectures/node_modules',
      '/home/cptwaffle/Projects/lhl/node_modules',
      '/home/cptwaffle/Projects/node_modules',
      '/home/cptwaffle/node_modules',
      '/home/node_modules',
      '/node_modules'
    ]
  }
```

This is the module `object`. It contains alot of information about the file we ran in our terminal. If you look closely there is an `exports` key with value of `{}`.

Whatever we put into that object, (even overwritting it for any other variable) we can `import` or `require` in another file. So for our code what we will do is this:

```js
// Just enough to run the function
const equalArrays = (arrOne, arrTwo) => {
  return 0;
}

module.exports = { equalArrays }
```
Our Folder structure should look like this:

```
-test  // FOLDER
  -> test.js // FILE WITHIN FOLDER test
-equalArrays.js  // FILE THATs ADJACENT TO test FOLDER
```

We will then make a folder called `test` and make a file in that folder called `test.js`. In that file, we will write this
```js
const { equalArrays } = require('../equalArrays');
console.log(equalArrays);
```

And when we run this we will get

```js
[Function: equalArrays]
```

printed on the screen and if we run the function in console.log

```js
console.log(equalArrays());
```

will print `0` because that we coded our function to do for now. This is the way you should start to structure your functions that you are thinking of reusing in other code. Rewritting code is never good, so re-using it just makes alot more sense.

#### Writing some Tests

In `test.js` file we will start thinking of some tests we want to write

```js
console.log("inputs are [1,2,3,4], [1,2,3,4] ==> should return TRUE --->  ", equalArrays([1,2,3,4], [1,2,3,4]));
console.log("inputs are ['a', 'a'], ['a', 'a'] ===> should return TRUE --->  ",  equalArrays(['a', 'a'],['a', 'a']));
console.log("inputs are [1,2,3,4], [1] ==> should return FALSE --->  ", equalArrays([1,2,3,4], [1]));
console.log("inputs are 'a', 23 ==> should return FALSE --->  ", equalArrays('a', 23));
```

Now we will finally start writing code and test each time we write to make sure each test passes.

```js
// completed code here!
const equalArrays = (arrOne, arrTwo) => {
  if (!(Array.isArray(arrOne) || Array.isArray(arrTwo))) return false;

  if (!(arrOne.length === arrTwo.length)) return false;

  for (let index in arrOne) {
    if (arrOne[index] !== arrTwo[index]) return false;
  }

  return true;
}
```

Great!! Our Tests pass and now we have done our first trust of TDD. However, it was really hard to read on which tests are passing and which are failing. We wrote a ton of tests and just looking through our `console.log`s was a nightmare. We also had to format and space it out so it was a tad more readable...

### WHAT IF I TOLD YOU

![morpheos](https://miro.medium.com/max/1200/1*-WjoA9CKH2mPyhiSj30slA.jpeg)

### THERE'S AN EASIER WAY

Introducing [Mocha](https://mochajs.org/)! Mocha is a `framework` That lets us write our tests alittle bit structured. We have `describe` blocks that lets us explain which tests will be running, and we have `it` blocks where we can write what each test does

```js
describe("Tests for equalArrays Function!", () => {
  describe("Number Tests", () => {
    it("takes 2 arrays (numbers) that are equal and returns true", () => {
      assert.equal(equalArrays([1,2,3,4],[1,2,3,4]), true);
    })

    it("takes 2 arrays with only 1 item in, returns true", () => {
      assert.equal(equalArrays([1],[1]), true);
    })

    it("takes 2 arrays (decimal number arrays) that are equal and returns true", () => {
      assert.equal(equalArrays([3.14, 2.15],[3.14, 2.15]), true);
    })
  })

  describe("String Tests", () => {
    it("takes 2 arrays (string values) that are equal and returns true", () => {
      assert.equal(equalArrays(['a', 'b'],['a', 'b']), true);
    })
  })
});
```

So after installing it as a `dev-dependancy` for `mocha` we run `npm run test`

```

  Tests for equalArrays Function!
    Number Tests
      ✓ takes 2 arrays (numbers) that are equal and returns true
      ✓ takes 2 arrays with only 1 item in, returns true
      ✓ takes 2 arrays (decimal number arrays) that are equal and returns true
    String Tests
      ✓ takes 2 arrays (string values) that are equal and returns true


```

Which is alot nicer to read and understand what tests pass and fail. IF it a test fails it will give us a big error and will tell you exactly what test has gone wrong!

#### Chai ( assertion library )

in our example we were using the built in `assert` function from Node. However it has big limitations because it can only do only 2 assertions. `Chai` gives a broader way to test our functions ( can check if number is bellow a specific number, or check if a key is within an object, or if an array has a specific value, etc)

[All different types of assertions](https://www.chaijs.com/guide/styles/#should)

Chai offers three different interfaces: `should`, `expect`, and `assert`

```js

str.should.be.a('string');
str.should.equal('hello world');

expect(str).to.be.a('string');
expect(str).to.equal('hello world');

assert.typeOf(str, 'string');
assert.equal(str, 'hello world');
```

For most cases its a matter of preference of which one you would like to use.
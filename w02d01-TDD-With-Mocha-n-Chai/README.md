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

We want to write a function that checks if a a string is a palidnrome ( the same word is backwards). So we work on our code and come up with:

```js
const palindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-1 - i])
            return false;
    }

    return true;
}
```

This is good! And even maybe correct! buut we cannot truly know until we write some Tests. In the past, you would test this code manually, but we want to slowly make these tests automatic! We learned that javascript has a few different ways of writting some tests.


#### `console.assert`
```js
  console.assert(palindrome('racecar') === true, 'FAIL: Should of returned true, but returned false')
```

#### `Built in assert library`

```js
const assert = require('assert');
assert.strictEqual(numOfVowels('tomato'), 3, 'Tomato has 3 vowels!');
```

These are great methods, but they lack readiblity ( sometimes ), and overall they are alittle primative for what we want to do. Instead we will use 3rd party libraries like `mocha` and `chai` in helping us out!

Before however, we want our files to be `modules`. We do not want to write our tests Right in the same file because it is not the clean approach. We want our tests seperated from the overal function. So here comes `module.exports`

### Module Exports

If we start looking into re-usbale code we should modularize this function. We can keep our function as one file, to keep things nice and separated, and just `require` it out to another file.

if we add to our equalArrays File:

```js
// Just enough to run the function

console.log(module);
```

You will get some gigantic object that looks like this:

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
const palindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-1 - i])
            return false;
    }

    return true;
}

module.exports = { palindrome }
```
Our Folder structure should look like this:

```
-test  // FOLDER
  -> palindromeTest.js // FILE WITHIN FOLDER test
-palindrome.js  // FILE THATs ADJACENT TO test FOLDER
```

We will then make a folder called `test` and make a file in that folder called `test.js`. In that file, we will write this
```js
const { palindrome } = require('../palindrome');
console.log(palindrome);
```

And when we run this we will get

```js
[Function: palindrome]
```

printed on the screen and if we run the function in console.log

```js
console.log(palindrome());
```

will print `false` because that we coded our function to do for now. This is the way you should start to structure your functions that you are thinking of reusing in other code. Rewritting code is never good, so re-using it just makes alot more sense.

#### Writing some Tests

In `test.js` file we will start thinking of some tests we want to write

```js
//EDGE CASES
// if we put in a number, or array, or obj should return false
try {
    console.assert(palindrome(1221) === false, 'FAIL: a integer passed should return false');

} catch (e) {
    console.log(e.message);
}
// if string is empty, return false 
try {
    console.assert(palindrome('') === false, 'FAIL: empty string should return false');

} catch (e) {
    console.log(e.message);
}
// if undefined, return false
try {
    console.assert(palindrome() === false, 'FAIL: if nothing/null has been passed, return false');

} catch (e) {
    console.log(e.message);
}

// 1 word pallindrome
console.assert(palindrome('racecar') === true, 'FAIL: racecar should return true');
// 1 word non-pallindrome
console.assert(palindrome('hello') === false, 'FAIL: hello should return false');
// multi word pallindrome
[1] === [1]
// multi word non palindrome 
try {
    assert(palindrome('was it a car or a cat i saw') === true, 'FAIL: "was it a car or a cat i saw "should return true');
} catch (e) {
    console.log(e.message);
}
/// 2 ways of writting tests with nodeJS (without any libraries)
try {
assert(palindrome('hello world') === true, 'FAIL: "hello world" should return false');
} catch (e) {
    console.log(e.message);
}
// console.assert
// the built in assert library
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
const { expect } = require('chai')
const palindrome = require('../palindrome');

describe("Edge Cases Tests for Palindrome", () => {
    it('should return false when a number is passed', function() {
        expect(palindrome(1221)).to.equal(false);
    });
    it('should return false when an empty string is passed', function() {
        expect(palindrome("")).to.equal(false);
    });

    it('should return false when palidrome is called without any paramters', function() {
        expect(palindrome()).to.equal(false);
    })
})

describe('Happy Path Cases for palindrome', () => {
    it('should return true for the word racecar', () => {
        expect(palindrome('racecar')).to.equal(true);
    })

    it('should return false for hello because its not a palindrome', () => {
        expect(palindrome('hello')).to.equal(false);
    })

    it('should return true for a multi word palindrome', () => {
        expect(palindrome('was it a car or a cat i saw')).to.equal(true);
    })

    it('should return false for multi word non-palindrome', () => {
        expect(palindrome('hello world')).to.equal(false);
    })
})
;
```

So after installing it as a `dev-dependancy` for `mocha` we run `npm run test`

```

  Edge Cases Tests for Palindrome
    ✓ should return false when a number is passed
    ✓ should return false when an empty string is passed
    ✓ should return false when palidrome is called without any paramters

  Happy Path Cases for palindrome
    ✓ should return true for the word racecar
    ✓ should return false for hello because its not a palindrome
    ✓ should return true for a multi word palindrome
    ✓ should return false for multi word non-palindrome

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
### Objects in JS

Today we looked into objects, what are they, how to use them, how to send them and return from functions

So far during your bootcamp life, you have been using things such as `primatve` types and `arrays`

#### Review (Primative Types)

There are 7 primitive data types: string, number, bigint, boolean, null, undefined, and symbol.

```js
let str = 'Hello World'; // string
let num = 28; // number
let bigInt =  9007199254740991n; // big int
let bool = true; // boolean
let sym = Symbol("Sym"); // Symbol <--- we haven't tried it
let nothing = null;
let noExistance = undefined;
```

Quick `0`, `null`, `undefined` meme

![](https://pics.me.me/0-null-undefined-39557667.png)

#### Review ( Arrays )

An array is a special variable, which can hold more than one value at a time.

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

```js
let carsNames = ['Toyota', 'Honda', 'Mitsubishi', 'BMW'];
```

Now here is a new problem we are facing. We are trying to record the following infomration of a car:

 - brand
 - model
 - year
 - transmission type

Theoretically, we can just store that information into an array and be done with it

```js
let car = ['toyota', 'GT86', 2019, 'manual'];
```

....BUT the problem with this is that people and other programs that use this array will have to remember that the brand name is always at the `0` element and model will the `1` element of the array, etc...

#### Enter Objects

An object, just like an array, can hold more than 1 value at a time.
The differences are:

- value MUST have a specific key.
- Objects are denotes with `{}` brackets


```js
  let car = {
    brand: 'toyota',
    model: 'GT86',
    year:  2019,
    transmissionType: 'manual'
  }
```

To get the brand value out of the object we can use the dot notation.

```js
  car.brand; // gets the brand
```

We also can set a new value or overwrite the existing value with the `dot` notation

```js
car.brand = 'Subaru' // overwrote the brand with a name Subaru
car.model = 'BRZ'  // overwrote model with name BRZ
car.driveterain = 'RWD' // added a new driveterain key with value RWD
```

very simular to arrays but more descriptive. Here's how it will look like in arrays.
```js
  car[0] // WAY less descriptive. What was at the 0th index again??
```

The advantage to using objects is that the order of the keys does not infact matter, because you can call them each `key` name.

#### Cool!! What else can objects store othar than primative types?

Well, objects can store anything! We can store `arrays` as values

```js
  let car = {
    brand: 'toyota',
    model: 'GT86',
    year:  2019,
    transmissionType: 'manual',
    colors: ['red', 'black', 'green', 'white', 'baby blue', 'grey'] // the value is a whole array
  }
```

To access the colors array we write

```js
car.colors // returns the array of all the colors
```

if we want to get the first element:

```js
car.colors[0] // red
```

##### What if we want to loop through the array?

```js
for (let color of car.colors) {
  console.log(color);
}

// OUTPUT
'red'
'black'
'green'
'white'
'baby blue'
'grey'
```

#### Object within an Object (Object-ception)

We can also put `other objects` into the object.

```js
  let car = {
    brand: 'toyota',
    model: 'GT86',
    year:  2019,
    transmissionType: 'manual',
    colors: ['red', 'black', 'green', 'white', 'baby blue', 'grey'],
    //INCOMING NEW OBJECT
    driver: {
      name: 'Vasiliy',
      rank: 'amateur',
      bloodType: 'O-',
    }
  }
```

To access the driver rank (nested object) we would write:

```js
car.driver.rank // amateur
```

#### Functions inside of Object

We can even create `FUNCTIONS` inside of our `Object`.

```js
  let car = {
    brand: 'toyota',
    model: 'GT86',
    year:  2019,
    transmissionType: 'manual',
    colors: ['red', 'black', 'green', 'white', 'baby blue', 'grey'],
    driver: {
      name: 'Vasiliy',
      rank: 'amateur',
      bloodType: 'O-',
    },
    // A function in our car object
    noise: function() {
      console.log("BRrrrrbrbrbrbrbrbrbrbrbrrbrbrbrb");
    }
  }
```

To call the function:

```js
car.noise() // Runs the noise function from the car object
```

#### What if we need to write a function that needs access to one or more object keys/values ???

Enter the `this` keyword. `this` refers to the context of the object we are in. We can access all the object `values` and `keys` with the keyword `this`.

In the function `printSpecs()` we get the `brand` and `model` by using the `this` keyword.

```js
  let car = {
    brand: 'toyota',
    model: 'GT86',
    year:  2019,
    transmissionType: 'manual',
    colors: ['red', 'black', 'green', 'white', 'baby blue', 'grey'],
    driver: {
      name: 'Vasiliy',
      rank: 'amateur',
      bloodType: 'O-',
    },
    noise: function() {
      console.log("BRrrrrbrbrbrbrbrbrbrbrbrrbrbrbrb");
    },
    printSpecs() {
      console.log("CAR: " + this.brand + ' ' + this.model)
      console.log("Driver: " + this.driver.name, this.driver.bloodType)
      console.log("The car Makes:");
      this.noise();
    }
  }
```


#### Other cool things you can do with Objects
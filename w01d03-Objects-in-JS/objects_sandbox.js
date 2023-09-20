// Review!


// Variables

// a variable lets you store a value or a reference 

let fruit = 'apple';
fruit = 'banana';

const PI = 3.14;

// PI = 4;
// console.log(fruit);
// console.log(PI);


// Arrays

const colors = ['red', 'blue', 1, 2, true, false, ['hello', 'world']];
// index          0       1    2  3    4     5       6[0]     6[1]

// to add a value into an array, we use the .push() method

// the order always matters! order will always be the same as long as you programatically
// dont change it! 
// console.log(colors);

// colors.push('green');
// console.log(colors);
// console.log(colors[4]);
//////////////////////////////////////////////////

//              make       model    year  doors   gas/elec/hybrid   type, milage,  hasLeather
const carOne = ['toyota', 'corolla', 2012, 4, 'gas only', 'LE', 92000, false];
//                 0        1         2     3   4 
const carTwo = ['honda', 2016, 'R', 10000, 'civic', 'gas only', true, 2];


const printCarDetails = function(car) {
  console.log(car[0], car[1], car[2]);
  console.log(car[6]);
}

// printCarDetails(carOne);
// printCarDetails(carTwo);

// What if i told you, that we can give context to a bunch of values we store in together??

// An object, is a way to store multiple pieces of data (just like an array)
// an object is denoted/created by using {} curly brackets!
// an object DOES NOT HAVE indexes, but it has something called KEYS
//  every key must have a VALUE that is stored.

// Properties of a JS Object

// The keys MUST BE UNIQUE!
const carObjOne = {
  milage: '92000', 
  engine: 'gas only', 
  make: 'toyota',
  doors: 4, 
  trimType: 'LE', 
  model: 'corolla', 
  leather: false,
  year: 2012,
  drivers: ['eddie', 'mark', 'sophie', 'robert'],
  greetings: function() {
    console.log("hello world");
    return 3.14;
  },
  dashboard: {
    spedometer: 180,
    glovebox: ['med kit', 'granola bars', ]
  }
};
// the order of an object DOES NOT MATTER!!!!
carObjOne.RANDOM_VALUE = 32
carObjOne['THIS_TEST_VALUE'] = 33

console.log(carObjOne);
const KEY = 'year';

console.log(carObjOne.KEY);
console.log(carObjOne[KEY])

const printCarDetails2 = function(carObj) {
  console.log(carObj.make, carObj.model, carObj.year);
  console.log(carObj.milage);
}

// printCarDetails2(carObjOne);
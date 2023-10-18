// Review!


// Variables

// a variable lets you store a value or a reference of something


let fruit = 'apple';
fruit = 'banana';

const PI = 3.14;
// PI = 4;

// console.log(fruit, PI);

// Arrays 

// a collection of values
// keep in one place

const fruits = ['apple', 'banana', 'coconut', 1,2,3, true, false, ['hello', 'world']];
// we can grow or shrink the array
// console.log(fruits);

fruits.push('NEW_VALUE_HERE');

// fruits = [];
// console.log(fruits);

// Functions

// function sum(a,b) {
  //   console.log("--- Sum Function ---");
  //   console.log(a + b);
  //   console.log('--------------------');
  // }
  
const sum = function(a,b) {
  console.log("--- Sum Function ---");
  console.log(a + b);
  console.log('--------------------');
  return a + b;
}


// const result = sum(2,2);
// console.log("-------------->", result);
// sum(4,2);
// sum(5,6);

/////////////

// I want to store information about certain cars
//              year    make      model    doors   color  interior   transmission_type
const carOne = [2007, 'toyota', 'corolla', 4, 'white', 'leather', false];
const carTwo = [2008, 'honda',  'civic', 4,  'red', 'not leather', false];
//               0       1          2    3     4      5     6        7
// i then want to print out the car year, make and model using a function

const printCarDetails = function(car) {
  console.log('year:  ', car[0]);
  console.log('make:  ', car[1]);
  console.log('model:  ', car[2]);

}

// printCarDetails(carOne);

// Objects -- is a collection values

// an object is denoted by {}
const car_one = {
  model: 'corolla',
  transmissionType: false,
  year: 2007,
  doors: 4,
  make: 'toyota',
  color: 'white',
  interior: 'leather',
  drivers: ['vas', 'lucy', 'kevin', 'arron'],
  // banana: ????
};



// instead of index, objects work with KEYs that are connected to their VALUES
// you get to decide what EACH KEY is

// dot notation

console.log(car_one.gas); /// undefined
console.log(car_one['gas']); /// undefined


const banana = 'color';

// the square bracket notation
                   // color 
console.log(car_one[banana]);


// const printCarDetails2 = function(carObj) {
//   console.log('year:  ', carObj.year);
//   console.log('make:  ', carObj.make);
//   console.log('model:  ', carObj.model);
// }

// printCarDetails2(car_one)


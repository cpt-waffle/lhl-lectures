// Review!

// variables -- place to hold/store data.

// let -- lets you switch values of a variable
let fruit = 'apple';
fruit = 'banana';

// console.log(fruit);

// const -- once the variable is set, you cannot change its value
// to anything else

const PI = 3.14;
// PI = 4; X WRONG --- cant reassign!!

// console.log(PI);

// Arrays 

const arrayOfFruits = [
  'apple',
  'orange',
  'coconut',
  'banana',
];
// a reference passing

const arrayCopy = arrayOfFruits;

arrayCopy.push('ANOTHER ONE');
//////////////////////////////////////////

// in arrays, the order really matters, 
// so index denotes the order based on numerical values

const car = ['toyota', 'corolla', 2012, 4, 'le', 'automatic', 'silver', 98000];
//index         0          1       2    3   4         5          6        7   

//             make-0,  model-1, year-2, type-3, transmission-4, etc
const car1 = ['honda', 'civic', 2015, 2, 'R', 'manual', 'blue', 59000];
const car2 = ['honda', 2, 10000, 2001, 'manual', undefined, 's2000'];

car2.push('Baby blue');
// console.log(car2);


const printCarDetails = function(carArr) {
  console.log(carArr[0], carArr[1]);
  console.log(carArr[7]);
}

// printCarDetails(car);
// printCarDetails(car1);
// printCarDetails(car2);

//////////////////////////////////////////////////////////////////////

// Objects

// a way to store many data
//                        (index) 
// an object is set with, a key and a value
// const car = ['toyota', 'corolla', 2012, 4, 'le', 'automatic', 'silver', 98000];
// //              0         1         2

// object keys give you context of what the values are representing 
// in an object the order of your keys does not matter at all

// there cannot be 2 KEYS with the same name
const carObj = {
  color: 'silver',
  seats: 4,
  model: 'corolla',
  year: 2012,
  type: 'le',
  transmission: 'automatic',
  make: 'toyota',
  milage: 98000,
  driver: {name: 'vas'},
};

// car[0] --> toyota
// console.log(carObj);
// .push  equivalent 
// carObj.materialType = 'Leather';
const KEY = 'APPLE';

// arr[0] arr[1] 
// Object Square Bracket notation
carObj[KEY] = 'some fruit variable idk';

console.log(carObj.KEY); // undefined

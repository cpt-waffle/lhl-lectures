// Variables

const PI = 3.14;
let fruit = 'banana';

// console.log(PI, fruit);


// Arrays

const randomArr = [1,2,3,4, true, false, 'Hello', 'world', [1,2,3], function() {
  console.log('hello world');
}];

// console.log(randomArr);

//
const carArr = ['automatic' ,2013, 'toyota', 'corolla', 4, 'halo-white', 'leather', false];
//               0        1         2      3       4           5          6 
//    0: year,   1: make, 2: model
const nextCar = [ 2022, 'toyota', 'rav4 electric', 4, 'orange', 'leather', true];
console.table(carArr);

//  to grab a specific value from an array, 
// square bracket notation
// to specify the index, of the value that we want
// ORDER MATTERS IN AN ARRAY !!!!!!!!!!!
console.log(carArr[1], carArr[2]);

// OBJECTS --------------------------------------------------
// a way to store many data (contextually)

// Object Keys HAVE TO BE UNIQUE
const carsObj = {
  color: 'baby blue',
  year:2020,
  make: 'Honda',
  model: 'Civic Type R',
  doors: {a:1, b:2},
  interor: 'leather',
  
};
// Order will not matter ( and sometimes even change )
// lexical order


console.table(carsObj);
const key = 'seats';
//     ^-----       doors:      4
carsObj['seats'] = 4;
carsObj.user = 'Vas';

console.table(carsObj);


// carsObj.model = 'CIVIC SI'
// console.log(carsObj.model)
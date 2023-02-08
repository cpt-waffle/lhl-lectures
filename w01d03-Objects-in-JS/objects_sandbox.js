//  Review!

const PI = 3.14;
let fruit = 'banana';
fruit = 'apple';
// console.log(fruit);

// Array 
// a way to store multiple data, as a collection

const array = [1,2,3,4, 'five', 'six', 'seven', false, true, [1,2,3]];
// console.log(array);

// array.push('this is a new element');
// console.log(array);

//// Functions

// ---------------------------> parameters
const randomFunction = function(a, b) {
  //...
  console.log("hello!");

  console.log(a + b);
}
// arguments
// randomFunction(3,2);
// randomFunction(5,3);
// randomFunction(5,5);

// storing information (context)

const car = ['toyota', 'corolla', 2012, 'white', 'automatic', 4, 1.2, 'cloth'];
//              0          1       2       3          4       5   6      7
//////////
const car2 = ['civic', 'honda', 2019, 'manual', 2.0, 'leather', 'red'];
//              0         1      2       3        4      5        6 

const arr = [24.5, 11.4, 54.3, 88.5];

const printDetails = function(car) {
  console.log("Make: ", car[0]);
  console.log("Model: ", car[1]);
  console.log("Number of seats", car[5]);
}

// printDetails(car);
// printDetails(car2);


// OBJECTS -----------------------------------

// an object is a way to store information 
// an object can store multiple data points (just like an array)
// an object can provide a context for every value
// an object order of values DOES NOT MATTER

const carArr = ['toyota', 'corolla', 2012, 'white', 'automatic', 4, 1.2, 'cloth'];
//              0          1       2       3          4       5   6      7

const carObj = {
  seats: 2,
  model: 'civic',
  engine: 2.0,
  make: 'honda',
  drivers: [{name: 'vas', lname: 'klimkin', }]

};
// keys -- a string that the user defines 


const carDetails2 = function(carObj) {
 console.log("make:", carObj.make);
 console.log("model:", carObj.model); 
}

// carDetails2(carObj);

// console.log(carObj);

/////////// setting keys
// arr['0'];
// arr['1'];
const objFinal = {};
objFinal.a = 3;  ////// arr.push()
objFinal.banana = 3;
//////// ^ but this only works when you know the key name ///////////////

// SQUARE BRACKET NOTATION
let keyName = 'flavor';
objFinal[keyName] = 'chocolate';
// object = {flavor: 'chocolate'};
console.log("objFinal", objFinal);
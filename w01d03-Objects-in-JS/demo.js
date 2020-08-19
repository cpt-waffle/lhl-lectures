// ------------ Review ---------------

const PI = 3.14;

const array = [1, 'two', 'three', 'four', 5, 6, false];
array.push('eight');
array[0] = 'zero';
///////////////////////////////////////
// first element in the array WILL ALWAYS BE MAKE
// the second element WILL AWLAYS ME MODEL

let car = ['blue', 'Toyota', 'Corolla', 2020, 'automatic', 4, ['leather', 'sporty', 'economy']];
// --------->0         1         2        3         4      5
// OBJECTS
let ObjCar = {
  trim: ['leather', 'sporty', 'economy'],
  model: 'Corolla',
  color: 'teal',
  make: 'Toyota',

  year: 2020,
  transmission: 'automatic',
  doors: 4,
  //someAwesomeKey: 'whatever?'
};
// array portion of car
console.log("Model:", car[1]);
// object
const someAwesomeKey = 'doors';
//          ObjCar["doors"];
console.log(ObjCar[someAwesomeKey]);
// console.log(ObjCar.make)

// console.log(newCar);

// When using the = operator with object/arrays
// it does not make a copy, but rather passes a reference.

// console.log(ObjCar.trim);

// for (let i of ObjCar.trim) {
//   console.log('trim is: ', i);
// }


// Add a new key/value pair to an object
// console.log(ObjCar);
// ObjCar.sunroof = false;
// ObjCar['sunroof'] = true;
// console.log(ObjCar.trim[1]);
const newCar = {...ObjCar};
newCar.sunroof = false;
// console.log(newCar);

const arrayOfCars = [
  {
    trim: ['leather', 'sporty', 'economy'],
    model: 'Corolla',
    color: 'teal',
    make: 'Toyota',
  
    year: 2020,
    transmission: 'automatic',
    doors: 4,
    //someAwesomeKey: 'whatever?'
  },
  {
    trim: ['leather', 'sporty', 'economy'],
    model: 'Honda',
    color: 'teal',
    make: 'Civic',
  
    year: 2012,
    transmission: 'manual',
    doors: 4,
    //someAwesomeKey: 'whatever?'
  },
  {
    trim: ['leather', 'sporty', 'economy'],
    model: 'ModelX',
    color: 'Grey',
    make: 'Tesla',
  
    year: 2020,
    transmission: 'automatic',
    doors: 4,
    //someAwesomeKey: 'whatever?'
  },
  ObjCar,
  ObjCar,
  ObjCar,

];

arrayOfCars[3].sunroof = true;
console.log(arrayOfCars)
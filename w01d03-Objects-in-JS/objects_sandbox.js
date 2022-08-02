// variables


const PI = 3.14;
let fruit = 'apple';
fruit = 'grape';

// console.log(PI);
// console.log(fruit);

// Arrays

// a collection of data 
// anything between []
// const array = [1,2,3,'four', 'five', [1,2,3] ];
// console.log(array);
// in an array, the ORDER MATTERS ALL THE TIME...

//            make       model     year   color 
const vCar = ['toyota', 'corolla', 2012, 'white', 4, 'automatic'];
//               0         1        2        3     4     5
const vCar2 = ['toyota', 'GR', 2020, 'white', 2, 'manual' ];
const vCar3 = ['tesla', 'model Y ','red', 2024, 'automatic',4 ];


const printCarDetails = function(car) {
  console.log(car[0]);
  console.log(car[5]);
}

// Objects
// a collection of data
// anything between {}
// do not have index
// objects have "keys"
// A KEY = is just a string that attaches a value to it
// every key has to be unique, no duplicates allowed!!
const vCarObj = {
  year: 2012,
  color: 'white',
  seats: 4,
  model: 'corolla',
  make: 'toyota',
};

vCarObj.driver = {
  name: 'vas',
  shirtColor: 'red',
}

vCarObj.driveterain = 'FWD';

console.log(vCarObj)
// the order never matters !!!!!!

// function printCarDetailsObj(carObj) { ... }

const printCarDetailsObj = function(carObj) {
  console.log("------------ CAR -------------");
  // we use the DOT notation, when we KNOW what key we are going to
  // work with
  console.log("Make", carObj.make);
  console.log("Model", carObj.model);
  console.log("Seats # :", carObj.seats);
  console.log("------------------------------");
}

// printCarDetailsObj(vCarObj);
/// let

// boxes that hold info
let num = 6;
const PI = 3.14;
let name = 'Vas';

// functions
// a piece of code that we can re-run over and over and over again
// re-usable

// const printStuff = function() {
//   console.log('Num:', num);
//   console.log('PI:', PI);
//   console.log('Name: ', name);
// }

// printStuff();

// function printStuff() { // it gets hoisted
//   console.log("IM RUNNING!!");
// }

// function printStuff() { // it gets hoisted
//   console.log("IM RUNNING!!2");
// }

// arrays

// a collection of data (order) // we use square brackets

// context
//            make       model     year  seats seat type  transmission-type, engine-displacement, etc
const car =  [ 'corolla', 2014, 4,'toyota',  'automatic','leather',  1.4, '4cylinder', false];
const car2 = ['honda', 'civic', 2020, 2, 'leather', false, 'manual', 'v6', 2.4,]
//              0        1        2   3     4          5      6          
// console.log(car);
// Square bracket to access a specific element in our array
// console.log(car[0]);

// What if we had a way to store data, in a collection, BUT WE CAN GIVE IT SOME CONTEXT OF WHAT THAT 
// DATA IS!!!!!!!!!!!

// Objects!!!

// a way to collect data, we give context to that data ( the order never matters !)

const carObj = {
  year: 2014,
  model: 'corolla',
  make: 'toyota',
  seatType: 'leather',
  numOfSeats: 4,
  aa: '',
  driver: {}
};
//  keys:  a string that gives context to the value
// console.log(carObj);

// to grab out a specific VALUE from an object, all we need to do tell the key name
// (if i KNOW the name of the key....)
// we use the DOT notation

// console.log(carObj.make);

const printCarDetails = function(car) {
  console.log('------------------');
  console.log(`Car Make: ${car.make}`);
  console.log(`Year: ${car.year}`);
  console.log(car.driver.name);
  console.log(car.banana.fruit);
  console.log(car.akjdkajsdklasdjl);

}


printCarDetails(carObj);

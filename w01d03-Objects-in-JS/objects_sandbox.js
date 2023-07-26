//  Review!

// variables -- place and hold values
//

let fruit = 'banana';
const PI = 3.14;
fruit = 'apple';


// Arrays 
//
const array = [1,2,3,4, 'five', 'six', 'seven', 7.5, 8.9, [9], undefined, false]; // square brackets represent an array
//             0 1 2 3     4      5        6     7     8   9        10     11           
// indexes - position of value in the array

// console.log(array);
array.push(99.9);
// console.log(array[4]);
// order in arrays matter

//  Context

//               make         model
const firstCar = ['toyota', 'corolla', 2002, 'silver', 'auto', 1.2, 'fabric', 4];
//                  0          1
const secondCar = ['civic', 'honda', 2014, 1.6, 'leather', 4, 'red']
let x = 4;
const printCarDetails = function(carArray) {
  console.log(carArray[0], carArray[1], carArray[2])
  console.log("Number of Seats, ", carArray[7]);
}
// console.log(firstCar)

// printCarDetails(firstCar);

// Objects

// a way to store many data together
// an object can be as big as you want or as small as you want
// you can increase and/or decrease the size of the object

// to create an object

// to add values, you will use (key: val) notation
// the order DOES NOT MATTER in objects ()
const firstCarObj = {
  seatType: 'fabric',
  make: 'toyota',
  color: 'silver',
  numOfSeats: 4,
  model: 'corolla',
  transmission: 'auto',
  year: 2002,
  KEY: 'this key'
};

const carsArr = [{make: 'toyota', model: 'corolla'}, {make: 'honda', model: 'civic'}];
//                            0                                    1

// console.log(carsArr[1].model)

const printCarDetails2 = function(carObj) {
  console.log(carObj.make, carObj.model, carObj.year);
  console.log("number of seats: ", carObj.numOfSeats);
}
// square bracket notation
const KEY = 'make';


console.log(firstCarObj[KEY])

// adding a key to an object (kind of like arr.push)
// dot notation

firstCarObj.wheelSize= '14 inch';
firstCarObj['wheelSize2']= '14 inch';


console.log(firstCarObj)


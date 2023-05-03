//  Review!

////// variables -- place to hold values

let fruit = 'banana'; // change value
const PI = 3.14;      // stays the same


fruit = 12.24;
// console.log(fruit);
// PI = 4;
// console.log(PI);

////////////// Arrays

// making a collection
// making a list 

const array = [1,2,3,4, 'five', 'six', 7.5, false, true, [1,2,3], undefined];
//  index      0,1,2,3,   4       5  ,  6     7      8     9   ,     10 
// console.log("BEFORE_--------------------");
// console.log(array);

// add more items into it
array.push('ANOTHER ELEMENT');
array[7] = 7.77;
// console.log("AFTER--------------------");

// console.log(array);
// replace an element in array

// Context ???
///               make      model     year    transmission interiorType,  seats, features
const firstCar = ['toyota', 'corolla', 2002, 'auto', 'fabric', 4, 'ac'];
//                   0         1        2
const secondCar = ['honda', 2012, 4, 'auto', 'leather', 'bluetooth', 'civic']
// arrays REALLY CARE ABOUT THIER ORDER OF ITEMS
const printCarDetails = function(carArr) {
  console.log(carArr[0], carArr[1], carArr[2]);
  console.log("Number of seats: ", carArr[5]);
}

// printCarDetails(firstCar);
// printCarDetails(secondCar);

// key called accessThis ???
// ----> undefined 
const firstCarObj = { 
  year: 2002,
  model:'corolla',
  transmission:"auto",
  seats: 4,
  make: 'toyota',
  interiorType: 'fabric', 
  features: ['ac', 'cd player'],
  "this is a key": 'value'
  // key: 'value'
};

// to access values in an object we have 2 different notations
// We DO NOT CARE ABOUT ORDER
// dot notation
// console.log('BEFORE----------------\n', firstCarObj);
console.log(firstCarObj.model);
// i want to add another key value pair to an object that has been already created
firstCarObj.color = 'silver gray';
// change a value to an existing key
firstCarObj.interiorType = ['leather', 'fabric'];
// console.log('AFTER---------------\n',firstCarObj);

// console.log(firstCarObj.features[1]);

// square bracket notation

const accessThis = 'seats';
// arr[0]
console.log(firstCarObj[accessThis])
//  Review!

////// variables -- place to hold values

let fruit = 'banana';
const PI = 3.14;

fruit = 'apple';

// console.log(fruit);
// console.log(PI);

///// Arrays ------------ a container/list/collection that can hold MULTIPLE values

const arrays = [1,2,3,4, 'five', 'six', 'seven', 22.3, false, true];
//              0 1 2 3     4      5       6      7      8      9
// console.log(arrays);
arrays.push(99.99999);
// console.log(arrays);

/// individual values

// console.log(arrays[4]);
arrays[4] = 'not five anymore :(';
// console.log(arrays);

/////////////////////////////////????/////////////////////////

//                make       model    engine type     year     color seats  isracingcar?
const firstCar = ['toyota', 'rav4', 'hybrid electrics', 2027, 'red', 4, false, function() { console.log("ON!")}];
//                   0        1          2               3       4   5     6
// 7 months later...
// In arrays, order MATTERS
const secondCar = ['v4', 'civic', 'honda', 'white', 2022];

// function review --

// console.log(firstCar);
const printCarDetails = function(car) {
  //...
  console.log("Make:", car[0]);
  console.log("Model:", car[1]);
  console.log("Year:", car[3]);

}

// printCarDetails(firstCar);
// printCarDetails(secondCar);

/////////////////////// OBJECTS //////////////////////////////

// a collection of data (just like an array...)
// to denote an object we use CURLY brackets.
// key: value pairs
// THE ORDER OF VALUES, DOES NOT MATTER
const firstCarObj = {
  model: 'm2',
  features: ["GPS", "rear camera", "8-track with a tape stuck inside it"],
  isSportsCar: true,
  seats: 2,
  year: 2023,
  make: 'bmw',
};
// console.log(firstCarObj);
// we can add/remove values in an object...

// console.log(firstCarObj);

firstCarObj.transmission = 'manual';
// console.log(firstCarObj);


const printCarDetailsObj = function(car) {
  console.log('Make: ', car.make);
  console.log('Model: ', car.model);
  console.log('Year: ', car.year);
  console.log('feature: ', car.features[2])

}



const letter = 'c';

const result = {};
// = 5

// dot notation...
result.letter = 5;
// square bracket notation.. (just like in an array but not an array)
// keys are strings
//        c
result[letter] = 9;


console.log(result['car']);
// {c: 5}
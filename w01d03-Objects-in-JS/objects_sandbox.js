// Variables

const PI = 3.14;
let fruit = 'apple';

// arrays
const basket = ['banana', fruit, false, 2.2, 1]
//                 0        1      2     3   4 
// console.log(basket);
basket.push('grapes');
// console.log(basket);

// console.log(basket[2]);

///////// information about cars

const car_one = [2007, 'toyota', 'corolla', 'halo-white', 4, 'leather', 'sun-roof'];
//                0,      1          2          3         4     5            6 
//               context?
// What happens if add a new item to this array?
// How would our data change, and what would be break?
const carDetails = function(car) {
  console.log("Make:", car[1]);
  console.log("Model:", car[2]);
  console.log("Year:",car[0]);
  console.log("Seats:", car[4]);
}
// carDetails(car_one);

// Objects
// a collection of data
// in objects, the ORDER DOES NOT MATTER!!!!!!!!!!!!!!!!!!!!!!!
const car_obj = {
  model: 'corolla',
  seats: 4,
  material:'leather',
  year: 2007,
  make: 'toyota',
  color: 'halo-white',
  optional: ['sun roof', 'AUX cable', 'heater seats'],
};

car_obj.driver = {
  name: 'Vas',
  bloodType: 'O-',

};


const carDetailsObj = function(carObj) {
  console.log('Make', carObj.make);
  console.log('Model', carObj.model);
  console.log('Year', carObj.year);
  console.log('Seats', carObj.seats);

}
// console.log(car_one);
// console.log(car_obj.optional[1]);

// carDetailsObj(car_obj);



const letter = 'q';
const obj = {};

////
// obj.letter = 11;
//// -- arrays use the square bracket notation arr[0], arr[1], etc
//// -- objects use the dot notation AND the square bracket notation 
obj[letter] = 11;
///

console.log(obj)
// {w: 11};

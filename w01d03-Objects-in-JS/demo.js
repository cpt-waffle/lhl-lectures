// ------------ Review ---------------
const number = 1;
const string = 'hello';
const bool = false;

const foo = function() {
  console.log('bar');
}
// FIRST THING IN THE ARRAY MUST BE BRAND NAME
// SECOND IN THE ARRAY MUST BE MODEL
const carArr = ['toyota', 'corolla', '2014', 'automatic', 4, 'red'];
               // 0,       1         2          3       4    5
carArr.push('Sport');
// console.log(car[1]);

// OBJECTS Storing data
// objects denoted with curly brackets
const carObj = { doors: 4, model: 'corolla', make: 'toyota', transmissionType: 'automatic',year: 2014, color: 'red'};

// console.log(carObj.model)

const banana = 'make';

// console.log(carObj[banana])

// Looping through an object !!
// i = 0; i < arr.length; i++
// OF and IN
// console.log("ARRAY LOOP")
// for (let i of carArr) {
//   console.log(i);
// }
// console.log("OBJECT LOOP")
// i in obj == keys 
// i of obj == ERROR
// for (let i in carObj) {
//   console.log('key is: ', i);
//   console.log(carObj.i)
//   console.log('value of this key is : ', carObj[i]);
// }

//ZENFUN
// 0 undefined false null '' NaN
const cars = [
  {make: 'toyota', model:'corolla', year: 2014, transmissionType: 'auto', drivers: ['a', 'b']},
  {make: 'toyota', model:'86', year: 2019, transmissionType: 'manual', drivers: ['a', 'b']},
  {make: 'honda',  model: 's2000', year: 2002, transmissionType: 'manual', drivers: ['a', 'b']},
  {year: 1992}
]

for (let car of cars) {
  console.log('car is');
  if (car.drivers) {
    console.log(car.drivers[0]);
  } else {
    console.log("NO DRIVERS!!!");
  }
}
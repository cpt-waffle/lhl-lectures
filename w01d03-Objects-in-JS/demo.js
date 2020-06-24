// Arrays Review





const array = ['Toyota', 'Corrola', 2015, 'Automatic', false];
const keys = ['make', 'type', 'year']
array.push('red');
//console.log(array);

// That is what object are,
// A way to store data, BUT instead of having an INDEX and a val, it has a KEY and val


// in objects the order of things how you store them, does not matter!

//In objects there are 2 ways of storing a key value pair
// so first way, but the only way we can store is because we define key name ourselves
// obj.color = 'red';
// // 

// whe you have a variable, with a value inside of variable that YOU WANT TO BE THE KEY
// we MUST use the square bracket notation.

// obj.keyName = 'leather';


// we want the make of the car
// we want the type of car
// and we want all the drivers 
// const drivers = function(object) {
//   // console.log(object)
//   console.log(object.make + ' ' + object.type);
//   console.log(object.drivers.length);
//   for (let i = 0; i < object.drivers.length; i++) {
//     // console.log("The Driver is: ", obj.drivers[i]);
//   }
// }

// drivers(obj);

const obj = {
  sunroof: false,
  type: 'Corolla',
  make: 'Toyota',
  transmission: 'Automatic',
  year: 2015,
  drivers: [['Vasiliy'],['Paul'],['Bob']]
};
// show a better ver of this!
let keyName = 'interior';
obj[keyName] = 'leather';

for (let i in obj) {
  console.log(obj[i]);
}
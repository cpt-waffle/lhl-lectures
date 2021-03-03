// SMALL REVIEW

// let or const
// const cannot be re-assigned 
// let can be re-assigned

let item = 'list';
const PI = 3.14;
let hungery = false;

// console.log(item);
// console.log(PI);
// an array is a list of any kind of data in a specific order!!

// Look, this array contains my user information
// the first value in the array is a name,
// the next value in the array is a last name
// the next value....
// const userOne = ['Vasiliy', 'Klimkin', 'AB+', 'right-handed', 'green', 'Toyota Corolla', 178, 'teacher'];
// const userTwo = ['Joe', 'Turner', 'A+', 'left-handed', 'brown', 'cyber-sec', 168, 'Chevy Malibu',];
// console.log('user variable before push....');
// console.log(userOne);
// userOne.push('teacher');
// console.log('user variable after push.....');
// console.log(userOne);

// console.log('first name:', userOne[0]);
// console.log('last name:', userOne[1]);
// console.log('profession:', userOne[7]);

// Objects 
// is a collection of data...
// objects have no indexes ([0], [1])
// objects order of data does not matter
// instead of indexes, objects have "keys" and "values"

//                   0          1        2          3 
const userOne = ['Toyota Corolla', 'Vasiliy', 'Klimkin', 'AB+', 'right-handed', 'green' , 178, 'teacher'];
const userObject = {
  car: 'Toyota Corolla',
  "first name": 'Vasiliy',
  lastName: 'Klimkin',
  bloodType: 'AB+',
  dominantHand: 'right-handed',
  eyeColor: 'green',
  height: 178,
  profession: "teacher",
  3: 3.14
};
// Objects 
// dot notation
// userObject.eyeColor // green
// you should use the dot notation whenever you KNOW exactly what key you want/need
// with an exception of numbers and keys with a space in it ("first name")

// console.log('user obj: ', userObject.car);

//Objects 
// square bracket notation (kinda like an array notation...)

// const xyz = 'dominantHand';

console.log('user obj: ', userObject['xyz']);


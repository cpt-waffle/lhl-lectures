//  Review!

// Variables

const PI = 3.14;
let fruit = 'banana';

// console.log(PI);
// console.log(fruit);

// Arrays

//           defined with square brackets!
const randomArray = [1,2,3,4, 'five', 'six', 'seven', true, false, ['yes', 'no']];
// index:            0,1,2,3     4      5       6       7     8       9 => [0,1]
// console.log(randomArray);
// accessing the array
// console.log(randomArray[7]);
// ORDER MATTERS IN AN ARRAY!


//  Context ??

const carArr = ['toyota', 'corolla', 2012, 'halo white', 'automatic', 4, 1.2, 'leather', false, 97453, 'reg'];
//              0: make    1: model  2:year, 3:color,     4: transmission, 5 doors,   6: engine ,  
const carArr2 = ['manual', 'honda',  'civic', 2008, 'red'] 
// console.log(carArr);

const printCarInfo = function(car) {
  console.log("------ Car Details --------");
  console.log("year:  ", car[2]);
  console.log("Make:  ", car[0]);
  console.log("Model: ", car[1]);
}

// printCarInfo(carArr);
// printCarInfo(carArr2);

// OBJECTS !

// a way store multiple data

const carObj = {
  color: 'halo white',
  seats: 4,
  model: 'corolla',
  year: 2012,
  transmission: 'auto',
  make: 'toyota',
  trunk: ['spare wheel', 'car jack', 'extra battery pack', 'water'],
  gloveBox: {
    itemOne: '',
    itemTwo: ''
  }
};
// key: value
// console.log(carObj);

//  METHOD #1 
// how do i grab values out of on object???
// console.log(carObj.year);
// console.log(carObj.color);
// console.log(carObj.make);
// in objects, the order DOES NOT MATTER!!!



////////////// adding keys to an object


const newObj = {};

console.log(newObj);

// 2 ways 


// 1 -- the dot notation
newObj.shoe = 'nike';

console.log(newObj);

//////////////////////////////////////////////////////

const variable = 'fruit';

newObj[variable] = 'banana';


console.log(newObj);
// output = {shoe: 'nike', fruit: 'banana'}
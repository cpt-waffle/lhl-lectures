// Any questions so far on actvites or concepts you have done?

// variables 

let fruit = 'apple';
fruit = 'balana';
const PI = 3.14;

// arrays
// collect multiple types of data ( context )
const arr1 = [1,2,3,4,5,6];
// console.log(arr1);
const arr2 = ['hello', 1, false, [1,2,3]];
// console.log(arr2);


// Objects
//           0 'make'   1 'model' 
const car1 = ['toyota', 'corolla', 2014, 4, 4, 'white', 'automatic', 'leather-seats'];
// index         0         1        2    3  4     5          6              7
const car2 = ['honda',  'civic',   2019, 2, 4, 'red', 'manual', 'leather-seats'];
const car3 = ['honda',  'CRV',  2, 4, 2020, 'automtic', 'manual', 'leather-seats'];

// in arrays ORDER MATTERS;

// OBJECTS 
// a way to collect data (just like an array)
// you can give context to every data value <-------

// an object starts with the CURLY BRACKETS {}
// keys are labels for our values 
// key: value
const carObj1 = {
  transmission: 'automatic',
  make: 'toyota',
  model: 'corolla',
  year: 2014,
  doors: 4,
  seats: 4,
  color: 'white',
  seatType: 'leather',
  driver: {
    name: 'Vasily',
    clothes: ['shoes', 'shirt', 'pants']
  }
}



const printCar = function(obj) {
  console.log('------------ Car Details ------------');
  console.log(`Make: ${obj.make}`);
  console.log(`Model: ${obj.model}`);
  console.log(`Year: ${obj.year}`);
  console.log(obj.driver.clothes[1]);
}


printCar(carObj1);

// Review
// if i want to store a single value 
// what shoud i do?

let PI = 3.14;
PI = 1;

// If i want to store MANY MANY MANY values, what should i use?
const array = [1,2,3,4, 'five', 'six', false, [1,2,3]];
// types
// console.log(array);
// Loook 
// first value of the car array MUST BE a MAKE
// second value of the car array MUST BE a MODEL
// third value of the car array MUST BE COLOR
const car = ['white', 'Honda', 'Civic', 2015, false];
// console.log(car[2]);
// car[0]
// car[1]
// Objects (they are kind of like arrays)
// curly brackets for object
// 
const carObj = {
  driver: {name: 'Bob'},
  model: 'Civic',
  color: ['white','blue','red','yellow', 'purple'],
  year: 2015,
  manual: false,
  make: 'Honda'
};
// i use the dot notation when i 100% know the key that i want access
// console.log(carObj.color);
const key = 'color';
carObj['engine'];
carObj.model = ['Civic', 'Fit'];
carObj.driver.name = 'Vasiliy'
console.log(carObj)


// Honda Civic 2015, color: white
const prettyPrintCar = function(obj) {
  console.log(obj.make, obj.model, obj.year, ', color: ', obj.color);
}
// prettyPrintCar(carObj);




const getValueOfKey = function(obj, keyName) {
  console.log('line 30', obj);
  // console.log(keyName);
  console.log(obj[keyName]);
  // car[3]
}

//getValueOfKey(carObj, 'model');
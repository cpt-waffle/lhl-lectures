// Review

// array manipulations
let arr = [function() { console.log('hi')},1,'hello',2, 'hi', 3, 'im batman', 4];
// functions

// primative variables

let name = "Vasiliy";
let number = 99;
let tired = false;
let bigNumber = 12346790094578984578984578986434;
// Symbol <--- if you have time, google what this is.
// its kind of cool!!!

let cars = ['Honda', 'Toyota', 'BMW', 'Subaru'];

// console.log(cars);

// I want to store a specific cars features
// make, model, year, how many seats, types of colors
// let car = ['AWD','Subaru', 2014, 4, ['red', 'green', 'blue']];
// Hey listen! Remember that The name of the car
//is array[0], and ....
// console.log(car);

//  OBJECTS :D
// order does not matter in objects
// every value has a specific key <-- important!

// let car = {
//   driveT: "AWD",
//   brand: 'Subaru',
//   year: 2019,
//   seats: 4,
//   //
// };
// console.log('car obj before adding',  car)
// // I want to add, colors into this car object

// car.color = 'red';
// // array.push()
let car = {
  driveT: "AWD",
  brand: 'Subaru',
  year: 2019,
  seats: 4,
  driver: {
    name: 'Paul',
    age: 25,
    test: function() {
      console.log(this)
    }
  },
  colors: ['red', 'blue', 'green'],
  noise: function() {
    console.log('brbrbrbrbrbrbrbrbrbrbrbbr');
  },
  details: function() {
    // console.log(this.driveT);//Refers to the object you are
    // currently in
    console.log("This car belongs to ", this.driver.name);// driver name
    console.log("This car is ", this.driveT);//driveT
  }
};

console.log(car.driver.test());
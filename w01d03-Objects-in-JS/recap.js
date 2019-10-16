let number = 4;
let arr = [1, 'hello', 4.35, [2,3], true, function() { console.log('hello world')} ];

// console.log(arr);

// I want to store information about a car
// brand, model, year

let car = ['Toyota', 'Corolla', 2019, 'FWD'];
let index = 2;
car[index];
// console.log(' the car element at 0 is ' + car[0]);
// OBJECTS!!!!!!!!!!!!!!!!!!
// its a collection, just like an array...
//  BUUUUUUUUUUUUUT..................

let carObject = {
  model: 'Corolla',
  brand: 'Toyota',
  color: ['red', 'white', 'black', 'blue'],
  driveTrain: 'FWD',
  year: 2019,
  driver: {
    name: 'Bob',
    height: 178,
    bloodType: 'O+',
    clothes: {
      pants: 'jeans',
      pockes: ['keys', 'cellphone']
    },
  },
  noise: function() {
   console.log('ffffffffffffffffffbrrbrbrbr');
   return 43;
  },
  printCarDetails: function() {
    //  'this' is context of our object
    // console.log(this.noise());
    console.log('Brand', this.brand);
    console.log('Model', this.model);
    console.log('Year', this.year);
    console.log("The driver's name is ", this.driver.name);
    console.log('The car goes...');
    this.noise();
  }
};

let ttt = "brand";

carObject[ttt] = 'Subaru';

console.log("OBJECT CHANGED");
console.log(carObject);


// console.log(carObject);

let apple = "year";

// console.log(carObject.printCarDetails());

// Add object within Objects


// console.log(JSON.parse(console));













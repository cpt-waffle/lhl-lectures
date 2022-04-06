const carArray = ['4seats', 'toyota', 'corollla', 2014, 'white', 'auto'];
// really care about order
/// PUSH to add 
carArray.push('1.4L')
let index = 3;


// objects
console.log(carArray[index]);

// context of value
// keys must be unique, no duplicate keys will ever exist in an object!
const obj = { year: 2014, numOfSeats: '4seats', make: 'toyota', type: 'corolla'};
obj.engine = '1.4L';
obj['engine'] = 1.4;

let key = 'year';

console.log(obj[key])

// delete obj.engine;
// obj.drivers = ['Vas', 'ben', 'Mr Buttons']
// console.log(obj.drivers[0])


///
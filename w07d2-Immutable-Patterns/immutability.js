// immutability
// primative values
// let fruit = 'banana';
// let fruitCopy = fruit;
// console.log('fruit ', fruit);
// fruit = 'grapes';
// console.log('fruit ', fruit);
// console.log('fruit COPY ', fruitCopy);


//----------------------------
const car = {make: 'toyota', year: 2021, model: 'GR86', color: 'TrackBRed', trims: ['leather', 'plastic']};
const car2 = {...car, trims: [...car.trims]};
car.color = 'blue';
car2.make = 'COROLLA';
car.trims.push('gold');
console.log(car);
console.log(car2);
console.log(car2 === car); // memory of car2 is same as car therefore they are equal
//---------------------------
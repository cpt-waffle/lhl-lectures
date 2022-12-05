// // map // forEach // Filter // reduce

const array = ['zebra', 'dog', 'cat', 'hippo', 'elephant', 'cheetah'];

for (let animal of array) {
  console.log(animal);
}

for (let index in array) {
  console.log(index);
}

console.log("---------forEach------------");

// loops through an array, and then runs your callback on each element

const printAnimals = (animal, i) => {
  console.log(animal)
  console.log(i);
}

array.forEach(printAnimals);

array.forEach((animal, i) => {
  console.log(animal)
  console.log(i);
});

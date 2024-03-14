console.log('------ this is our example for backend node');

const PI = 3.14;

const sum = (num1, num2) => {
  return num1 + num2;
}

console.log(PI);

console.log(sum(2, 3));

console.log(module);

module.exports = {PI, sum};
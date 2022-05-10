// review
const PI = 3.14;

const greetings = (name) => {
  console.log(`hello ${name}`);
}
// arrow functions
const greetings2 = name => console.log(`hello ${name}`);


// greetings('vas');
// greetings2('vas');

//// CALLBACKS !!!!

const highOrder = (callback) => {
  console.log("start");
  callback();
  console.log("end");
}

highOrder(() => {
  console.log("this was defined in the parameter, when we called highOrder()")
})
// Review!

// Functions!

// const greetings = function() {...}

const greetings = () => {
  console.log("hello world");
  console.log(2 + 2);
  return 3.14;
}

//                 parameters
const printUser = (name, email) =>{
  console.log("----------------");
  console.log(email);
  console.log('-- ', name);
  console.log("----------------");

}
//          arguments
// printUser('v', 'v@k.ca')

//////////////////////////////CALLBACKS//////////////////////////////

//                this is a function that is passed in as a parameter
const startRace = (callback) => {
  console.log("START");
  console.log(callback);
  console.log("END");
}

startRace(printUser);
startRace(() => {
  console.log("this function does nothing :(");
})
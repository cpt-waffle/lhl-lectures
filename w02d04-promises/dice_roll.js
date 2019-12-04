
// const diceRoll = (cb) => {
//   console.log('rolling dice......!')
//   setTimeout( () => {
//     const number = Math.floor(Math.random() * 6) + 1;
//     cb(number);
//   }, 2000)
// }


// const diceRoll = () => new Promise( (resolve, reject) => {
//   console.log('rolling dice......!')
//   setTimeout( () => {
//     const number = Math.floor(Math.random() * 6) + 1;
//     resolve(number)
//   }, 2000)
// });

// diceRoll().then( (number) => {
//   console.log("THE NUMBER IS ", number);
// });
const greeting = function() {
  return new Promise( function(resolve, reject) {
    let greeting = "Hello";
    console.log('this is the greeting!! ', greeting);
    resolve(greeting);
  })
}

greeting().then( function(someData) {
  console.log('inside of the .then!!!');
  console.log(someData);
}).then( function() {
  console.log('after the then ????');
}).then( function() {
  console.log('after after the then ????');
  return new Promise( function(resolve, reject) {
    console.log("3rd promise");
    console.log('waiting');
    setTimeout(function() {
      resolve(true);
    }, 4000);
  })
}).then( function() {
  console.log('LAST PROMISE');
});


greeting().then( function(someData) {
  console.log('GREEETIN 2 ');
  console.log(someData);
}).then( function() {
  console.log('after the then ????');
}).then( function() {
  console.log('after after the then ????');
  return new Promise( function(resolve, reject) {
    console.log("3rd promise");
    console.log('waiting');
    setTimeout(function() {
      resolve(true);
    }, 2000);
  })
}).then( function() {
  console.log('LAST PROMISE');
});
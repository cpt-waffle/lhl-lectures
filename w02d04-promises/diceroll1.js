// Lets make a function that rolls a dice and
//returns you a value
// the value gets return in 2 seconds....

// WITH CALLBACKS

const diceRoll = (callback) => {
  console.log("Dice is rolling....")
  setTimeout(() => {
    let number = Math.floor(Math.random() * 6 ) + 1;
    callback(number);
  }, 2000);
}

diceRoll((number) => {
  console.log('The number is ', number);
});
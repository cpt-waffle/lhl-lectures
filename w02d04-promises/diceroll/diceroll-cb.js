// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = dice => {
  const result = Math.floor(Math.random() * dice ) + 1;
  return result;
}

const diceRoll = (callback) => {
  console.log("Rolling the dice...");
  setTimeout(() => {
    const number = randomNumber(6);
    callback(number);
  }, 2000)
}

diceRoll((value) => {
  console.log('we rolled a:  ', value);
  diceRoll((value) => {
    console.log('we rolled a:  ', value);
    diceRoll((value) => {
      console.log('we rolled a:  ', value);
    });
  });
});
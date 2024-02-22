// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = dice => {
  const result = Math.floor(Math.random() * dice ) + 1;
  return result;
}

// promises
const diceRoll = () => {
  console.log("Rolling the dice...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = randomNumber(6);
      if (number === 5) {
        reject('you rolled a 5 :(')
      } else {
        resolve(number);
      }
    }, 2000)
  })
}

diceRoll().then(value => {
  console.log('we rolled a  ', value);
  return diceRoll()
}).then(value => {
  console.log('we rolled a  ', value);
  return diceRoll()
}).then(value => {
  console.log('we rolled a  ', value);
}).catch(e => {
  console.log("a roll went badly :(");
  // console.log(e.message);
})
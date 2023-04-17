// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }
const randomNumber = (diceSize) => {
  const result = Math.floor(Math.random() * diceSize) + 1;
  return result;
}

const diceRoll = () => {
  console.log('dice is rolling...');

  return new Promise((resolve, reject) => {
    // do something async
    setTimeout(() => {
      const result = randomNumber(6);
      if (result > 3) {
        return resolve(result);
      } else {
        return reject(':*(');
      }
      
    
    }, 1000);
  })
}

const result = diceRoll();
console.log(result);

result.then(v => {
  console.log("dice: ", v);
  return diceRoll()
}).then(num => {
  console.log("dice: ", num);
  return diceRoll()
}).then(num => {
  console.log("dice: ", num);
  return diceRoll()
}).then(num => {
  console.log("dice: ", num);
  return diceRoll()
}).then(num => {
  console.log("dice: ", num);
  return diceRoll()
}).catch(e => {
  throw e;
})
// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = (dice) => {
  const result = Math.floor(Math.random() * dice) + 1;
  return result;
}

const diceRoll = () => {
  console.log("Rolling...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = randomNumber(6);
      if (result < 3) {
        return reject(':(');
      }

      return resolve(result);
      
    }, 2000)
  })
}

diceRoll().then(num => {
  console.log("the number was", num);
  return diceRoll()
}).then(num => {
  console.log("the number was", num);
  return diceRoll()
}).then(num => {
  console.log("the number was", num);
}).catch(e => {
  console.log("error happend :(");
  console.log(e);
})
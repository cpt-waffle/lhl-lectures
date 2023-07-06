// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = (dice) => {
  const result = Math.floor(Math.random() * dice) + 1;
  return result;
}

const diceRoll = (cb) => {
  console.log("Rolling...");
  setTimeout(() => {
    const result = randomNumber(6);
    if (result < 3) {
      cb(':(', null);
    }
    cb(null, result);
  }, 2000);
}

diceRoll((err, num) => {
  if (err) throw err;
  console.log("the number was", num);
  diceRoll((err, num) => {
    if (err) throw err;
    console.log("the number was", num);
    diceRoll((err, num) => {
      if (err) throw err;
      console.log("the number was", num);
    })
  })
})
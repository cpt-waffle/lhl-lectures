// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }
const randomNumber = (diceSize) => {
  const result = Math.floor(Math.random() * diceSize) + 1;
  return result;
}

const diceRoll = (cb)  => {
  console.log('dice is rolling...');
  setTimeout(() => {
    const result = randomNumber(6);
    if (result > 3) {
      return cb(null, result);
    } else {
      return cb(-1, null)
    }
  },1000)
}

// readFile(cb => {

// })

diceRoll((err, num) => {
  if (err) {
    throw err;
  }
  console.log("dice:", num);
  diceRoll((err,num) => {
    console.log("dice:", num);
    diceRoll((err,num) => {
      console.log("dice:", num);
      diceRoll((err,num) => {
        console.log("dice:", num);
        diceRoll((err,num) => {
          console.log("dice:", num);

        });
      });
    });
  });
});


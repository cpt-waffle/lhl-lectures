// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = (dice) => {
  const result = Math.floor(Math.random() * dice) + 1;
  return result;
}

 //               function              ( num ) => 
const diceRoll = (cb) => {
  console.log("Rolling....");
  setTimeout(() => {
    const result = randomNumber(6)
    cb(result)
  }, 2000)
}


diceRoll((num) => {
  console.log('the number was ', num);
  diceRoll((num) => {
    console.log('the number was ', num);
    diceRoll((num) => {
      console.log('the number was ', num);
      diceRoll((num) => {
        console.log('the number was ', num);
        diceRoll((num) => {
          console.log('the number was ', num);
        })
      })
    })
  })
})
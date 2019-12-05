const diceRoll = () => {
  console.log("Dice is rolling....")
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let number = Math.floor(Math.random() * 6 ) + 1;
      if (number > 3)
        reject('Number is greater than tree')
      else {
        resolve(number);
      }
    }, 2000);
    // if whatever you want to do, succeeds ( no errors)
    // wrap that result, in the resolve
    // if it fails, wrap it reject

  });
}


diceRoll().then((number) => {
  console.log("HURRAY");
  console.log("THe number is ", number);
})
// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    return result;
}

const diceRoll = () => {
    return new Promise((resolve, reject) => {
        console.log('Dice is Rolling...')
        setTimeout(() => {
            let number = randomNumber()
            console.log(number);
            resolve(number);
        }, 2000)
    })
}
functionName().then( (result ) => {

})

diceRoll().then((num) => {
    console.log("PROMISE COMPLETED");
    // console.log(num);
    return diceRoll();
}).then((num) => {
    console.log("SECOND PROMISE COMPLETED");
    // console.log(num)
    return diceRoll();
}).then((num) => {
    console.log("THIRD PROMISE COMPLETED");
    // console.log(num);
})

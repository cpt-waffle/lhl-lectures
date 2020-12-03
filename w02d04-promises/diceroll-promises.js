// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = (diceSize) => {
    const result = Math.floor(Math.random() * diceSize) + 1;
    return result;
}

const diceRoll = () => {
    return new Promise((resolve, reject) => {
        console.log("dice is rolling...")
        setTimeout(() => {
            const result = randomNumber(6);
            console.log("RESULT HERE!!");
            console.log(result);
            // if (result > 3)
            //     reject('SOMETHING WENT WRONG!!');

            resolve(result);
        }, 2000);
    })
}

diceRoll().then((myNumber) => {
    console.log("myNumber");
    console.log(myNumber);
    return diceRoll();
}).then((myNumber) => {
    console.log("HELLO WORLD!!");
    console.log(myNumber);
    return diceRoll()
}).then((myNumber) => {
    console.log("THIRD VALUE!!");
    console.log(myNumber);
}).catch( e => {
    console.log("SOMETHING WENT WRONG");
    throw new Error(e);
})
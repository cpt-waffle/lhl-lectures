// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }
const randomNumber = (diceSize) => {
    const result = Math.floor(Math.random() * diceSize) + 1;
    return result;
}

const diceRoll = (randNumFunc, cb)  => {
    console.log("dice is rolling...");
    setTimeout(() => {
        const result = randNumFunc(6);
        console.log(randNumFunc(6));
        if (result > 3) 
            cb('SOMETHING WENT WRONG');
        else 
            cb();
    },2000);
}

diceRoll(randomNumber, (err) => {
    console.log("first roll finished!");
    if (err) {
        console.log("SOMETHING WENT WRONG!!")
        throw new Error(err);
    }
    diceRoll(randomNumber, (err) => {
        console.log("second roll finished!");
        if (err) {
            console.log("SOMETHING WENT WRONG!!")
            throw new Error(err);
        }
        diceRoll(randomNumber, (err) => {
            console.log("third and final roll finished");
            if (err) {
                console.log("SOMETHING WENT WRONG!!")
                throw new Error(err);
            }
        })
    })
});


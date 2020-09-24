// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...

const randomNumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    return number;
}


// Using callbacks to deal with async functions

const diceRoll = (cb) => {
    console.log('Rolling the dice.....');
    setTimeout(() => {
        const num = randomNumber()
        console.log(num);
        console.log(cb);
        cb(num);
        return 3;
    }, 100)
}

diceRoll( (num) => {
    // if (err) return err
    console.log("DONE FIRST ROLL");
    diceRoll(() => {
        // if (err) return err

        console.log("DONE SECOND ROLL");
        diceRoll( () => {
        // if (err) return err

            console.log("DONE THIRD ROLL");
        })
    });
});


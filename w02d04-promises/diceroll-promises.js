// Promises are basically syntatic sugar of callbacks!


const randomNumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    return number;
}

const diceRoll = () => {
    //...
    return new Promise((resolve, reject) => {
        console.log("Rolling Dice.....")
        setTimeout( () => {
            const num = randomNumber();
            if (num >= 3) {
                resolve(num); // <----- TASK HAS BEEN COMPLETED AND THE VALUE THAT WAS FINISHED COMPUTING IS THIS
            } else {
                reject('OPSIE')
            }
        }, 1000)
    })
}


a  = diceRoll()
console.log(a);


a.then((val) => {
    console.log(val);
    return diceRoll();
}).then((val) => {
    console.log("SECOND roll");
    console.log(val);
    return diceRoll();
}).then((val) => {
    console.log("THIRD diceroll");
    console.log(val)
}).catch((err) => {
    console.log("SOMETHING WENT WRONG :( ")
    throw new Error(err);
})

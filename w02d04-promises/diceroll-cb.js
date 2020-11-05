// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

const randomNumber = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    return result;
}

// this a variable that contains a value.
let fruit = 'apple';

// this is a variable that contains a value.
let randomFunc = () => {
    console.log("hello world");
}


const diceRoll = (callback) => {
    console.log('Dice is Rolling...')
    setTimeout(() => {
        let number = randomNumber()
        console.log(number);
        callback();
    }, 2000)
}


diceRoll(() => {
    diceRoll(() => {
        diceRoll(() => {
            console.log("FINISHED!");
        })
    }) 
});


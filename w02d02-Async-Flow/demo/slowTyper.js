// Given a string , Print each letter with a delay..
// so it looks like someone is typing the string slowly....


const slowTyper = (str) => {
    let seconds = 1000;
    for (let letter of str) {
        setTimeout(() => {
            process.stdout.write(letter);
        }, seconds)
        seconds += 300;
    }
}

const sentance = "Awesome Possum!!!";
slowTyper(sentance);
// WHAT if we make slow typer as a recursive function and then add setTimeout To that?!


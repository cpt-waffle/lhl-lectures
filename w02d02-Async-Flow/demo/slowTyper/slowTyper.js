// Given a string , Print each letter with a delay..
// so it looks like someone is typing the string slowly.
// hello!
// print letter by letter 
const string = 'Hello World of Async !!!!\n';
let delay = 300;
// for (const letter of string) {
// ['H', 'e', 'l', 'l', 'o'] join('')
string.split('').forEach((letter) => {
    setTimeout(() => {
        process.stdout.write(letter);
    }, delay);
    delay += 300;
})

// with a delay 
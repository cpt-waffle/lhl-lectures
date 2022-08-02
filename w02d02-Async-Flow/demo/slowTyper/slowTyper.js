// slow type some messages //
// we want to make the program type a string out, but in a very slow way...
// letter by letter, on the same line

//make a string
const string = 'Hello World\n';
//loop the string
let time = 1000;
for (let letter of string) {
  // and print it letter by letter
  // - every letter gets printed on the same line
  setTimeout(() => {
    process.stdout.write(letter);
  }, time);
  time = time + 1000;
}
 // - how to delay the print?
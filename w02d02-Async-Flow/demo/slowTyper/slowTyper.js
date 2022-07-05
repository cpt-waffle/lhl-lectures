// slow type some messages //
// we want to make the program type a string out, but in a very slow way...
// letter by letter, on the same line

// i have a string
const str = 'Hello\n';
let time = 1000;
// i want to print it letter by letter BUT on the same line
  // -- how do i loop through a string letter by letter?
  for (let letter of str) {
    // -- how do i print every letter on the same line?
    // process.stdout.write()
    setTimeout(() => {
      process.stdout.write(letter);
    }, time);
    // time = time + 1000
    time += 1000;
    //how do i delay every single print????
  }

// slow type some messages //
// we want to make the program type a string out, but in a very slow way...
// letter by letter, on the same line


const str = 'Hello World\n';

// loop every letter
for (let index in str) {
  // print every letter on the same line
  // delay print??
  setTimeout(() => {
    process.stdout.write(str[index]);
  }, 1000 * index);
}

let delay = 1000;

for (let letter of str) {
  // print every letter on the same line
  // delay print??
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay+=200);
}




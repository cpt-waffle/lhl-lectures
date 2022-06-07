// slow type some messages //
// we want to make the program type info out, but in a very slow way...

//process
const str = 'Hello\n';
// H --> 1000 > run callback
// E --> 2000 > run callback

let time = 1000;
// i want to print each letter after a certain time
for (let letter of str) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, time)
  time += 1000;
}

// i want to print each letter on the same line ( no new lines until the end... )
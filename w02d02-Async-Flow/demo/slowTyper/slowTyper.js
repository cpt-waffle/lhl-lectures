// slow type some messages //
// we want to make the program type info out, but in a very slow way...

const str = 'Hello World\n';

let time = 1000;


for (let i of str) {
  setTimeout(() => {
    process.stdout.write(i);
  }, time);
  time += 1000;
}
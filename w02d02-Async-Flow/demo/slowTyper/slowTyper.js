// slow type some messages //
// we want to make the program type a string out, but in a very slow way...
// letter by letter, on the same line

const string = 'Hello World\n';


// go through(loop) my string
//  ^--- go through EACH letter
// and print it out ( on the same line)
// How do i slow the print down???

const slowType = (str) => {
  // c style <-- logic/index
  // for in <-- index
  // for of <--- values
  let timer = 1000;
  for (let letter of str ) {
    setTimeout(() => {
      process.stdout.write(letter);
    },1000);
    timer += 1000; // timer = timer + 1000;
  }
}

slowType(string);



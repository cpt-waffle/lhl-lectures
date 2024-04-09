// slow type some messages //
// we want to make a function that types a string out, but in a very slow way...
// letter by letter, on the same line

// setTimeout <---

const string = 'Hello World\n';


// make a function
// we want to print each letter on the same line (how?)
// how to slow down the print out?
// we want to loop through the string passed and print it it with the 
// method above ^
//

const slowType = function(str) {
  let timer = 1000;

  for (let letter of str) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, timer);
    timer += 2000;
  }
}

slowType(string);
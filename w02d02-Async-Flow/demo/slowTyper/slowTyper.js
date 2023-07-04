// slow type some messages //
// we want to make a function that types a string out, but in a very slow way...
// letter by letter, on the same line


// make function
// declare a string and pass that string into the function
// loop through every letter of the string
// print every letter on the same line 
// add a delay

const string = 'Hello World\n';


const slowType = (str) => {
  let timer = 1000;
  // const array = str.split('');
  for (let letter of str) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, timer)
    timer += 1000;
  }
}


slowType(string);


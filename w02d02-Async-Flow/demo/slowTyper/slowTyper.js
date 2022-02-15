// slow type some messages //
// we want to make the program type info out, but in a very slow way...

// figure out how to loop each character 
const string = 'Hello World!\n';
let delay = 0;

for ( let i of string ) {
    // process.stdout.write()
    // figure out a way to print a character THEN wait, and do the next one....
    setTimeout(() => {
        process.stdout.write(i);
    }, delay+=1000);
}


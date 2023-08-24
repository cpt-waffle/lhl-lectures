// review

// variables 
// to store some data that we can re-use or keep as reference

let fruit = 'apple';
const PI = 3.14;

fruit = 'banana';

// console.log(fruit, PI);

//  Functions

//  -- its an action 
//  -- a block code, that can be re-called at any point
//  -- the block of code can accept arguments/parameters

// parameters
// default parameters
const greetings = (name, num1=0, num2=0, num3=0) => {
  const result = num1+num2+num3;
  console.log("Hello World!", name, num1, num2, num3);
  return result;
}


// arguments 
// const functionResult = greetings('Vasiliy',9,4);
// console.log(functionResult);
// console.log(greetings('Edward',1,2,3));

const name = 'Bob';
const num0 = 3;
const num1 = 2;
const num2 = 5;

// console.log(greetings(name, num0, num1, num2));
///////////////////////////////////////////////////////////////

const customPrint = name => {
  console.log("Hello There!", name);
  name(' is equal to?');
  console.log("---- End of CustomPRint ----");
}

const askQuestion = customEnding => console.log("whats 2 + 2 = ?", customEnding);


const newName = "vasiliy";

customPrint(askQuestion);
askQuestion();
// Write a function called mumble X
// mumble takes in one parameter, which is a string  X
// mumble returns a modified string, where every letter is 
// is printed x amount of times, and for every section add a - 
// Example
// "abcd"  =>  'a-bb-ccc-dddd'
// "rock"  =>  'r-oo-ccc-kkkk'
// "DeSk"  =>  'D-ee-SSS-kkkk'


/// -- write a bit of code to run the problem
//  -- have a test case ( or a few test cases) so you know what are you striving for
//  -- break down the problem into smaller pieces, and solve each piece
//  -- ask for help for one of those pieces, and then move on 

//                     str=abcd

//        a     b      c      d
//        0+1  1+1    2+1     3+1

const mumble = function(str) {
  let result = '';
  for (let index in str) {  // indexes
    const letter = str[index];

    result += letter.repeat(Number(index)+1);
    if (index < str.length - 1) {
      result += '-';
    }
  }

  return result;
  //.....
}
// code golfing --> write code with as less lines as possible 
//  DO NOT DOO THIS!!!!!!!!
// const mumble2 = str => str.split('').map((c, i) => (c.repeat(i+1))).join('-')
// ------------------------

console.log(mumble('abcd'), 'expect to return a-bb-ccc-dddd');
console.log(mumble2('abcd'), 'expect to return a-bb-ccc-dddd ** ');

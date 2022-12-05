// REVIEW!!!!!

// a function, is just a block of code, that you can over and over 
// and over again....


// functions can take values
const sum = function(num1, num2, num3, num4, num5) { // paramaters?
  console.log("start of function");

  console.log(`${num1} + ${num2} =` , num1 + num2);
  console.log("end of function");
  // functions can return values back
}

// arguments ?
sum(2,3,5);
sum(3,4);

/// how many parameters can a function have?
//  types of parameters and arguments 

// high order function
const foo = function(a,b,c,cb) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(cb);
  cb();
}

const n = 1;
const string = 'strings';

// foo(n, string, [1,2,3,4], {a:1, b:2});

const bar = function() {
  console.log("this is bar function: line 34");
  return;
}


foo(1,2,3, bar)



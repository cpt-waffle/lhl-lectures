// REVIEW!!!!!

// arrays
// 0 - first name
// 1 - last name
// 2 - age
const arr = [1,2,3,4,5,6];
// index     0,1,2,3,4,5

// objects
const obj = {a: 1, banana: 2, c: 3, imruningoutofwords: 5, e:4}
//keys
const user = {first_name: 'vas', last_name: 'klimkin'};


// console.log(arr);
// console.log(obj.e);

///////////////////////////////////////////////////////


const greetings = function(val) {
  console.log("Hello ", val);
}

// greetings('cheever');
// greetings('vas');
// greetings('david');

const foo = function(a,b) {
  console.log(a + b);
}

// let val1 = 9;
// let val2 = 6;

// foo(val1, val2);



// foo(2,2);
// foo('a','b');
// foo(true,false); // 1  0 
// foo([1,2,3], [1,2,3])
// foo({a:1, b:2}, {a:1, b:2})


// callbacks --- are parameters in a function that are functions themselves
const firstFunction = function(a) {
  a();
}

const b = function() {
  console.log('im b from line 53');
};


firstFunction(b);


// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array.

const banana = function(arr, cb) {
  for (let val of arr) {
    cb(val);
  }
}

const a1 = [];
banana(['apple', '', 'coconut', 'pair', 'grapes'], function(val) {
  a1.push(val);
});

console.log(a1);

let i = 0;
banana(['apple', 'coconut', 'pair', 'grapes'], function(val) {
  if (val) {
    i++;
  }
});

banana(['apple', 'coconut', 'pair', 'grapes'], function(val) {
  if (val === 'coconut') {
    console.log("there is coconut in here!");
  }
});

console.log(i);
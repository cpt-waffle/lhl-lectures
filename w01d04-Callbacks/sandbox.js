//es lint --- sort of important
/// eslint filname.js 
//  eslint --fix filename.js

// check both arrays if they are equal
// loop through one array and checking if 
//the index value of both arrays is equal to each othe

const arr = [1,2,3];
const obj = {a:1}

// use the dot notation IF I KNOW EXACLTY WHAT WILL BE THE NAME OF THEY KEY
obj.b = arr
// someone gives you the key name in a variable
const key = 'banana';
obj[key] = arr;
console.log(obj);
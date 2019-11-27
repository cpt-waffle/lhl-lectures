// make a function that takes in a string
// and returns an object that has the amount of
// dog words that was in string, and the amount of
// cat words that were in a strng.
const str = 'dog dog dog cat cat dog cat dog cat dog apple';

const countCatsAndDogs = function(string) {
  let arr = string.split(' ');
  let result = {
    dog: 0,
    cat: 0,
  }

  for (item of arr) {
    if (item === 'dog') {
      // console.log("found a dog");
      result.dog += 1;
    } else if (item === 'cat') {
      // console.log("found a cat...");
      result.cat += 1;
    } else {
      console.log('found something else.......');
    }
  }
  console.log(result);


}

// countCatsAndDogs(str);

// ####################################################
// Make a function that adds a new gadget
// to the the batman object. The batman object
// will be passed into our function..

let batman = {
  realName: 'Bruce Wayne',
  suit: 'v8.05',
  gadgets: []
}

const addGadget = function(batman, gadgetName) {
  // console.log(gadgetName);
  batman.gadgets.push(gadgetName);
}
// console.log(batman);

// ####################################################

// Make a function that takes in an object with two values,
// then swaps the two values within the object and returns true.

let a = 1;
let b = 2;

const badSwap = function(a,b) {
  let c = b;
  b = a;
  a = c;
  return true;
}
// console.log('before swap');
// console.log(a);
// console.log(b);
// badSwap(a, b);
// console.log('after swap');
// console.log(a); // 2
// console.log(b); // 1

// let array = [1,2]
// ####################################################
let object = {tuklihgfhtgukhgghfdhjkgfhjkjhcsgjsagdfkja: 43, "__ sdlfksfdnl sdlfjslg sdfjlsd": -54};

// Make a function that takes in an object with two values,
// then swaps the two values within the object and returns true.


let key = 'aa';
let arr = [1,2,3,4] //
arr[0]
// look into object and give me the value for they key called "key"
// console.log(object[key]);

const swap = function(obj) {
  // console.log(obj);
  // console.log(obj[''])
  let keysArray = Object.keys(obj);
  // console.log(keysArray);
  let key1 = keysArray[0];
  let key2 = keysArray[1];

  // console.log('value1 is', obj['key1']);
  // console.log('value2 is', obj[key2]);


  let temp = obj[key1];
  obj[key1] = obj[key2];
  obj[key2] = temp;
  return true;
}

// console.log(object);
swap(object)
// console.log(object);

let o1 = {
  1: 'one',
  two: 'two',
  three: '3',
  'forty-four': 44,
}

// const printVal = function(object, keyName) {
//   //print out the value of the keyName that was passed in to the
//   // function
//   console.log(object)
//   console.log(keyName)
//   console.log(object[keyName]);
// }

// printVal(o1);

// ####################################################

// Make a function that takes in an object shopping cart, and prints out all
// of the items within the shopping cart.

let shoppingCart = {
  1: 'Toothpaste',
  2: 'Toilet paper',
  three: 'Milk',
  '4': "Eggs",
  'fifty-five': 'Lemons',
  6: 'Cereal',
  10: 'Bird Food'
};

// let arr = ['cat', 'dog', 'bird']

// for ( i in arr) < --- i index 0,1,2 arr[i]

// for i of arr  <--- i value i cat dog bird

const printShoppingCart = function(cart) {
  // console.log(cart);
  // There is alot of ways to loop through an object
  // METHOD 1 ------ using a for IN Loop
  // for (item in cart) {
  //   console.log(cart[item]);
  // }

  // METHOD 2
  // let keys = Object.keys(cart);
  // console.log(keys);
  // for (let i of keys) {
  //   console.log(cart[i]);
  // }

  // METHOD 3

  // let values = Object.values(cart);
  // // console.log(values);
  // for (let val of values) {
  //   console.log(val);
  // }


  // METHOD 4 <-- Code Golf <-- please dont do this!!!!!
  //
  // this is hard to read
  // DONT DO THIS!!!!!!
  Object.keys(cart).forEach( e => console.log(cart[e]));
  //  NO NO NO NO NO
  //
}

printShoppingCart(shoppingCart);

// ####################################################



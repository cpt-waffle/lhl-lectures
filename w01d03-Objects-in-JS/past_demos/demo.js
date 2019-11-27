//
let str = 'dog dog dog cat cat dog cat dog cat';

// make a function that takes in a string
// and returns an object that has the amount of
// dog words that was in string, and the amount of
// cat words that were in a strng.

let dogCatCounter = function(string) {
  let arr = string.split(' ');
  let obj = { dog: 0, cat: 0 };
  // console.log(arr);
  for (word of arr) {
    // console.log(word);
    if (word === 'dog') {
      // console.log('I FOUND A DOG !!!!!!');
      obj.dog += 1;
    }
    if (word === 'cat') {
      obj.cat += 1;
      // console.log("I FOUND A CAT but im alergic........");
    }
  }
  return obj;
};

// console.log('There are:   ',dogCatCounter(str));


// let a = 1;
// let b = 4;
let obj2 = {
  a: 1,
  b: 4,
}


const swap = function(obj) {
  let temp = obj.a;
  obj.a = obj.b;
  obj.b = temp;
}
let copyObj = {
  a: obj2.a,
  b: obj2.b
}

copyObj.a = 72;

// console.log('A AND B BEFORE:', obj2);

swap(obj2);

// console.log('A and B after -->', obj2);




let batman = {
  realName: 'Bruce Wayne',
  suit: 'Mark 2',
  gadgets: []
}
// Make a function that adds a new gadget
// to the the batman object. The batman object
// will be passed into our function..
const addGadget = function(gadgetName, obj) {
  // console.log(gadgetName, obj);
  // console.log(obj.gadgets)
  obj.gadgets.push(gadgetName);
}


// console.log("BATMAN before function", batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Smoke Granade', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// addGadget('Grapling Hook', batman);
// console.log("BATMAN after  function", batman);
let shoppingCart = {
  four: 'SPAM',
  6: 'folders',
  two: 'Brush',
  one: 'Toothpaste',
  three: 'toilet paper',
  7: 'Chrismas Tree',
  five: 'toilet brush'
};


let item = 'four';
console.log(shoppingCart[item]);
console.log(shoppingCart.four)


// I want to print each item (value) in our object
const printCart = function(cart) {
  // console.log(cart);
  // I want to loop over an object
  // METHOD 1 --- Using the IN
  // for (let item in cart) {
  //   console.log(cart[item]);
  // }
  // METHOD 2 -
  // let values = Object.values(cart);
  // console.log(values);
  // for (let item of values) {
  //   console.log(item);
  // }
  // METHOD 3
  // let keys = Object.keys(cart);
  // // console.log(keys);
  // for (let key of keys) {
  //   console.log(cart[key]);

  // }
  // console.log(key);

}

// printCart(shoppingCart);

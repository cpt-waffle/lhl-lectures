// let { equalArrays } = require('../equalArrays');



// console.log("Equal Array Tests\n\n");


// console.log("String Tests\n");

// console.log("It takes 2 arrays (str) and returns true");
// console.log(equalArrays(['a','b','c'],['a','b','c']));
// console.log("takes 2 arrays (str) not equal, returns false");
// console.log(equalArrays(['a','b','c'], ['a','b']));
// console.log("takes 2 arrays, order is different, should return false");
// console.log(equalArrays(['a','b','c'], ['a','c','b']));

// console.log("\nNumber Tests\n");

// console.log("It takes 2 arrays (nums) and returns true");
// console.log(equalArrays([1,2,3,4],[1,2,3,4]));
// console.log("It takes 2 arrays (nums) and returns true");
// console.log(equalArrays([3.14],[3.14]));

// console.log("\nEdge Cases\n");

// console.log("It takes 2 empty arrays, returns true");
// console.log(equalArrays([],[]));
// console.log('takes 2 arrays, one is larger than other returns false');
// console.log(equalArrays([1,2,3], [1]));
// console.log('takes a string a number, returns false');
// console.log(equalArrays('hello', 33));
const { equalArrays } = require('../equalArrays');
const { assert, expect } = require('chai');

describe('EqualArrays Testing!', ()=> {
  describe('String Tests', () => {
    it('takes an array (str) they are equal, returns true', () => {
      assert.equal(equalArrays(['a','b','c'],['a','b','c']), true);
    })
    it('takes an array (str) with 1 val, returns true', () => {
      assert.isTrue(equalArrays(['a'],['a']));
    })
  })

  describe('Edge Cases', () => {
    it('takes 2 arrays, unequal length returns false', () => {
      assert.isFalse(equalArrays([1,2,3],[1]));
    })
    it('takes 2 arrays, they are equal, returns true ( NESTED ARRAY) ', () => {
      assert.isTrue(equalArrays([1,[1,2],3],[1,[1,2],3]));
    })
  })

});
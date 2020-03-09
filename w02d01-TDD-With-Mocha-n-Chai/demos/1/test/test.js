const { equalArrays } = require('../equalArrays');
const { assert } = require("chai");

// console.log("Tests for equalArrays\n\n");

// console.log("Number Tests\n");

// console.log("inputs are [1,2,3,4], [1,2,3,4] ==> should return TRUE --->  ", equalArrays([1,2,3,4], [1,2,3,4]));
// console.log("inputs are [1], [1] ==> should return TRUE --->  ", equalArrays([1], [1]));
// console.log("inputs are [1], [1] ==> should return TRUE --->  ", equalArrays([1.2, 1.2], [1.2, 1.2]));


// console.log("\nString Tests\n");

// console.log("inputs are ['hello', 'world'], ['hello', 'world'] ===> should return TRUE --->  ",  equalArrays(['hello, world'],['hello, world']));
// console.log("inputs are ['a', 'a'], ['a', 'a'] ===> should return TRUE --->  ",  equalArrays(['a', 'a'],['a', 'a']));
// console.log("inputs are ['a', 'b'], ['b', 'a'] ===> should return FALSE --->  ",  equalArrays(['a', 'b'],['b', 'a']));

// console.log("\nIncorrect Fail Tests\n");

// console.log("inputs are [1,2,3,4], [1] ==> should return FALSE --->  ", equalArrays([1,2,3,4], [1]));
// console.log("inputs are 'a', 23 ==> should return FALSE --->  ", equalArrays('a', 23));

describe("Tests for equalArrays Function!", () => {
  describe("Number Tests", () => {
    it("takes 2 arrays (numbers) that are equal and returns true", () => {
      assert.equal(equalArrays([1,2,3,4],[1,2,3,4]), true);
    })

    it("takes 2 arrays with only 1 item in, returns true", () => {
      assert.equal(equalArrays([1],[1]), true);
    })

    it("takes 2 arrays (decimal number arrays) that are equal and returns true", () => {
      assert.equal(equalArrays([3.14, 2.15],[3.14, 2.15]), true);
    })
  })

  describe("String Tests", () => {
    it("takes 2 arrays (numbers) that are equal and returns true", () => {
      assert.equal(equalArrays([1,2,3,4],[1,2,3,4]), true);
    })
  })
});
const assert = require('assert');
// a function that takes in a string as input
// returns back in a string is the same exact string backwards

// TDD 
// 1 - write the most minimal amount of code to execute some tests!

const palindrome = (str) => {
    if (!str) {
        return false;
    }

    if (typeof str !== 'string') {
        return false;
    }

    const modifiedStr = str.replace(/\s/g, '');
    for (let i = 0; i < modifiedStr.length; i++) {
        if (modifiedStr[i] !== modifiedStr[modifiedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 2 - Come up with some tests....

//EDGE CASES
// if we put in a number, or array, or obj should return false
try {
    console.assert(palindrome(1221) === false, 'FAIL: a integer passed should return false');

} catch (e) {
    console.log(e.message);
}
// if string is empty, return false 
try {
    console.assert(palindrome('') === false, 'FAIL: empty string should return false');

} catch (e) {
    console.log(e.message);
}
// if undefined, return false
try {
    console.assert(palindrome() === false, 'FAIL: if nothing/null has been passed, return false');

} catch (e) {
    console.log(e.message);
}

// 1 word pallindrome
console.assert(palindrome('racecar') === true, 'FAIL: racecar should return true');
// 1 word non-pallindrome
console.assert(palindrome('hello') === false, 'FAIL: hello should return false');
// multi word pallindrome
[1] === [1]
// multi word non palindrome 
try {
    assert(palindrome('was it a car or a cat i saw') === true, 'FAIL: "was it a car or a cat i saw "should return true');
} catch (e) {
    console.log(e.message);
}
/// 2 ways of writting tests with nodeJS (without any libraries)
try {
assert(palindrome('hello world') === true, 'FAIL: "hello world" should return false');
} catch (e) {
    console.log(e.message);
}
// console.assert
// the built in assert library
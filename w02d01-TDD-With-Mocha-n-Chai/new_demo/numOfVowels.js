const assert = require('assert');

// write a function that takes in a string 
// counts how many vowels are in that string


// write minimal amount of code to run some tests

const numOfVowels = (str) => {
    // const vowelsArr = ['a','e','i','o','u','y'];
    const vowelsObj = {a: true, e:true, i:true, o:true, u:true, y:true};
    let result = 0;
    for (let letter of str) {
        if (vowelsObj[letter]) {
            result++;
        }
    }

    return result;
}

// write some tests

try {
    assert(numOfVowels('hello world') === 3,  'FAIL: should return 3');
} catch (e) {
    console.log(e.message);
}


try {
    assert(numOfVowels('') === 0,  'FAIL: should return 0');
} catch (e) {
    console.log(e.message);
}
const assert = require('assert');

const numOfVowels = (str) => {
    const vowels = {a: true, e: true, i:true, o:true, u:true};
    let count = 0;
    for (let i of str) {
        if (vowels[i]) count++;
    }
    return count;
}

module.exports = numOfVowels;


// assert.strictEqual(numOfVowels('tomato'), 3, 'Tomato has 3 vowels!');
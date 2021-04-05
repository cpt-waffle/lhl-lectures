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


module.exports = palindrome;


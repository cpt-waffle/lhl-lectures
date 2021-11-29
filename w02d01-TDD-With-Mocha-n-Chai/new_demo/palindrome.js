const palidrome = (string) => {
    const arr = string.trim().toLowerCase().split('');
    // abba <--- 4  0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !==  arr[arr.length-1 - i]) {
            return false;
        }
    }

    return true;
}

// module
module.exports = palidrome;

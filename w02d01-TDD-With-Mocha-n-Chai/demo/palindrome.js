

const palindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-1 - i])
            return false;
    }

    return true;
}

module.exports =  palindrome;


// console.assert(palindrome('racecaf') === true, 'racecar');
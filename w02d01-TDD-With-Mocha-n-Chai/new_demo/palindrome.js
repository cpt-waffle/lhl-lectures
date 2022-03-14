const palindrome = (string) => {
    if (!string || typeof string !== 'string') return false;
    const sanitizedString = string.split(' ').join('').toLowerCase();
    const sanitizedStringReverse = sanitizedString.split('').reverse().join('').toLowerCase();

    if (sanitizedString === sanitizedStringReverse) {
        return true;
    }

    return false;
}

module.exports = palindrome;


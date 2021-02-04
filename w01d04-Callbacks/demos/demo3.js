const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];


const printOnly = (arr, callback) => {
    console.log(callback);
    for (let val of arr) {
        const result = callback(val);
        if (result === true) {
            console.log(val);
        }
    }
}


console.log('--- Only Numbers ---');
printOnly(arr, (v) => {
    return typeof v === 'number';
});

console.log('--- Only Strings ---');
printOnly(arr, (v) => {
    return typeof v === 'string';
})

// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
// 1,3,5,7,9
//       OF loop gives us the values
//          {key_one: 1, key_two: 2                        }
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
//           0   1    2    3     4

// IN LOOP gives us the indexes of those values
const printOnlyNumbers = function(arr) {
    // iterate through the array
    //.forEach
    // for (let elem of arr) {
    //     // console.log(typeof elem);
    //     if (typeof elem === 'number') {
    //         console.log(elem);
    //     }
    // }

    // for (let index in arr) {
    //     if (typeof arr[index] === 'number') {
    //         console.log(arr[index]);
    //     }
    // }

    for ( let i = 0; i  < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            console.log(arr[i]);
        }
    }
    // logical if ( what type of element it is? Num or String?)
    // console.log(element)
}

console.log(printOnlyNumbers(arr));

// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.
// two, four, six, eight, ten read only hi!

// const printOnlyStrings = function() { .... }
const printOnlyStrings = (arr) => {
    for (let elem of arr) {
        // console.log(typeof elem);
        if (typeof elem === 'string') {
            console.log(elem);
        }
    }
}

console.log(printOnlyStrings(arr));
// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
// 1,3,5,7,9
//       OF loop gives us the values
//          {key_one: 1, key_two: 2                        }
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
//           0   1    2    3     4

// loop through the array
// i gotta only print the numbers 
// for OF loop prints out the values of an array -- (works ONLY on arrays)
// for IN loop prints out the indexes of that array -- (works on arrays AND objects)
const printOnlyNumbers = function(arr) {
    for (let number of arr) {
        if (  typeof number === 'number' ) {
            console.log(number)
        }
    }
}

printOnlyNumbers(arr);

// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.
// two, four, six, eight, ten

// const printOnlyStrings = function() { .... }
const printOnlyStrings = (arr) => {
    for (let number of arr) {
        if (  typeof number === 'string' ) {
            console.log(number)
        }
    }
}

printOnlyStrings(arr);
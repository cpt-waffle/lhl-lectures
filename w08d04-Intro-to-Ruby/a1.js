const pizza = 'BBQ chicken Feast';
// console.log(pizza);

// const arr = [1,2,3,4,5,6,7,8,9,10];
// let i = 1;
// i++
// console.log(i);

// const printArr = arr => {
//     for (let elem of arr) {
//         console.log("The element is " + elem );
//     }
// }

// countChars ?

const countChars = str => {
    const result = {};
    console.log(result['h']);
    for (let c of str) {
        if (result[c])
            result[c]++;
        else
            result[c] = 1;
    }
    return result;
}
console.log(countChars('hello'));
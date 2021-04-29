// map // forEach // Filter // 

const array = [1, 'two', 3, 'four', 5];


// array.forEach((element, index) => {
//     console.log('element =>', element);
//     console.log('index   =>', index);
// });

// how many times have you looped through an array
// while making a new array, and pushing some values into the new array
const arr2 = [1,2,3,4,5]

const newArr = arr2.map((elem) => {
    console.log(elem);
    return elem * 2;
})

console.log(newArr);
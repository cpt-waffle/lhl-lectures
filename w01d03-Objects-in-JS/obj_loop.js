const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

const list2 = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}
const array = [1,2,3];
const array2 = [1,2,3];
console.log(array === array2);

console.log(list === list2);


// for in, for of, ~c style~

objCompare(list2, list) 

///////////// X -- OF LOOP DOES NOT WORK ON OBJECTS
// for (let b of list) {
//     console.log("b =", b);
// }
////////////////////////////////////////////////////

// const keys = Object.keys(list);
// console.log(keys);

// const values = Object.values(list);
// console.log(values);

// const entries = Object.entries(list);
// console.log(entries);
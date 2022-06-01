const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}
// in an array, when we use the for in loop, I is your indexes
// for in in an object, I is your key(s)
for (let i in list) {
    console.log("what is i? ", i);
    list[i];
}

// for of DOES NOT WORK IN OBJECTS!!!!!!!!!!!!!!!!!
// for (let j of list) {
//     console.log("what is j?", j);
// }
///////////////////////////////////////////////////

const keys = Object.keys(list);
console.log(keys);
for (let key of keys) {
    list[key];
}

const values = Object.values(list);
console.log(values);
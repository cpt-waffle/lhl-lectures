const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

for (let key in list ) {
    console.log(list[key]);
}

console.log(list);
console.log(Object.keys(list));    // gives back an array
console.log(Object.values(list));  // gives back an array
console.log(Object.entries(list)); // gives back an array

//              c style    for of    for in
// array          X         X         X
// object                             X

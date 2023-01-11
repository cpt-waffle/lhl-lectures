const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

// for of;  // array: values
// for of;  // object: BIG ERROR :(

// for in;  // array: index
for (let key in list) {
    console.log('key:   ',key);
    console.log('val:   ',list[key]);
    console.log('--------------');
}
//////////////////////////////////////////

console.log(Object.keys(list));
// for (let k of Object.keys(list)) {
//     console.log(k);
//     console.log(list[k]);
// }

console.log(Object.values(list));
console.log(Object.entries(list));


// for i = 0; // array: index but you set everything up 
// for i = 0; // object: NO METHOD :(

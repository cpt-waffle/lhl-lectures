const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

// const a = 1
// const arr = [] //
// arr = 3; //X
// const obj = {} //

list.itemOne = [list.itemOne, 'chocolate']
// object/array destruction 
// const copyList = {...list}

for (let key in list) {
    console.log("what is this?", key);
    console.log("val", list[key]);
    console.log("-------------------");
}

//  no for of loop on OBJECTS!!!! :(


// you can get the keys or the values, or BOTH, as an array ( converted )


delete list['i8'];

console.table(list);












// const arr = [1,2,3,4,5];
// //           0 1 2 3 4 


// for (let index in arr) {
//     console.log("index is", index);
// }

// for (let value of arr) {
//     console.log('value is ', value);
// }
const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

// for in
// for of
// c style

for (let i in list) {
    console.log(i);
    console.log(list[i]);
    console.log('---------------');
}

console.log(Object.keys(list));
console.log(Object.values(list));
console.log(Object.entries(list));


const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

// only loop that works with OBJECT is the IN loop
for (let key in list) {
    console.log(list[key]);
}

const keys = Object.keys(list);
const values = Object.values(list);

console.log(keys);
for (let key of keys) {
    console.log(list[key]);
}

console.log( Object.entries(list));
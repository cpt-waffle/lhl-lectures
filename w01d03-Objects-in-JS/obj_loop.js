const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

for (let key in list) {
    console.log(key);
}

const arrayOfkeys = Object.keys(list);
const arrayOfValues = Object.values(list);
const arrayOfArrays = Object.entries(list);

console.log(arrayOfkeys);
console.log(arrayOfValues);
console.log(arrayOfArrays);

for (let i of arrayOfkeys) {
    console.log(list[i]);
}
const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}

// objects can only use for in

for (let key in list ) {
    console.log(key, list[key]);
}


console.log(Object.entries(list));
console.log(Object.keys(list));
console.log(Object.values(list));

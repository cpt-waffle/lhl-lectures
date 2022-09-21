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
    console.log('-------------');
    console.log(key);
    console.log(list[key]);
    console.log('-------------');
}


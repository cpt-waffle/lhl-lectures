const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}


console.log(list);

/// How do We loop through an object?

// many ways

// get all the keys, (as an array,) loop through them, and use square bracket notation to get val

// Object.values()
const keys = Object.keys(list);
for (let key of keys) {
    console.log("Value is:", list[key]);
}

// for in
for (let k in list) {
    console.log(k);
    console.log("Value is:", list[k]);
}



///... more coplex ways later...
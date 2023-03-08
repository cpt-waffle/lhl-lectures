const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}


// for in loop!
for (let key in list) {
    console.log(key);
    console.log(list[key]);
}

// for of loops DO NOT work with objects
for (let v of list) {
    console.log(v);
}


//         Arrays    Objects   Strings
//  in        X        X         X
//  of        X                  X
// cstyle     X                  X

// Object.keys({a:1, b:2, c:3}) ==> ['a','b','c'];
// Object.values({a:1, b:2, c:3}) ==> [1,2,3];
// Object.entries({a:1, b:2, c:3}) ==> [['a', 1], ['b', 2], ['c', 3]]



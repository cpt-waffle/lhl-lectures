const list = {
    title: 'Shopping List',
    itemOne: 'Milk',
    itemTwo: 'Cookies',
    importantItem: 'toilet paper',
    importantItemTwo: 'soap',
    itemThree: 'bananas',
    i8: 'apples'
}
// values are what is inside of an array
// ['apple', 'banana', 'coconut']
//    0         1          2 
// index are the order of those said values
// Values
//          toyota          corolla
// {make: 'toyota', model: 'corolla'}
//  make             model
// Keys ^^^^^^^^^^^^^^^^

// only loop that works with OBJECT is the IN loop

// Arrays
// For In  grabs the index 0,1,2, etc
// For Of grabs the value  one,two,three, etc

// Objects
// For In grabs the keys, 'title', 'itemOne', 'itemTwo', etc
// For Of X_X error! cannot iterate through object using for..of loop



for (let key in list) {
    console.log(key, ' ----- ',list[key]);
}

// Take all the keys, from the object and put them into an array
const keysArr = Object.keys(list);
console.log(keysArr);
for (let key of keysArr) {
    console.log(list[key]);
}

const valuesArr = Object.values(list);

for (let val of valuesArr) {
    console.log(val);
}

console.log(Object.entries(list));